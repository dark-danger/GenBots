from fastapi import FastAPI, APIRouter, HTTPException, Depends, File, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
import json
import shutil

from models import (
    AdminLogin, Admin, AdminResponse, LoginResponse,
    Project, ProjectCreate, Contact, ContactCreate, ContactStatusUpdate
)
from auth import (
    hash_password, verify_password, create_access_token, get_current_admin
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create uploads directory
UPLOADS_DIR = ROOT_DIR / 'uploads'
UPLOADS_DIR.mkdir(exist_ok=True)

# Create the main app without a prefix
app = FastAPI()

# Mount uploads directory
app.mount("/uploads", StaticFiles(directory=str(UPLOADS_DIR)), name="uploads")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize admin user on startup
@app.on_event("startup")
async def startup_event():
    # Check if admin exists
    admin_exists = await db.admins.find_one({"email": "khannayash394@gmail.com"})
    if not admin_exists:
        admin = Admin(
            email="khannayash394@gmail.com",
            name="Yash Khan",
            password_hash=hash_password("9996171216")
        )
        await db.admins.insert_one(admin.dict())
        logger.info("Admin user created successfully")

# ==================== ADMIN AUTHENTICATION ====================

@api_router.post("/admin/login", response_model=LoginResponse)
async def admin_login(credentials: AdminLogin):
    admin = await db.admins.find_one({"email": credentials.email})
    if not admin or not verify_password(credentials.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    token = create_access_token({"sub": admin["id"]})
    admin_response = AdminResponse(
        id=admin["id"],
        email=admin["email"],
        name=admin["name"]
    )
    return LoginResponse(token=token, admin=admin_response)

@api_router.post("/admin/verify")
async def verify_token(admin_id: str = Depends(get_current_admin)):
    admin = await db.admins.find_one({"id": admin_id})
    if not admin:
        raise HTTPException(status_code=401, detail="Admin not found")
    
    admin_response = AdminResponse(
        id=admin["id"],
        email=admin["email"],
        name=admin["name"]
    )
    return {"valid": True, "admin": admin_response}

# ==================== PROJECTS ====================

@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    query = {}
    if category and category != "all":
        query["category"] = category
    
    projects = await db.projects.find(query).sort("created_at", -1).to_list(1000)
    return [Project(**project) for project in projects]

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@api_router.post("/admin/projects", response_model=Project)
async def create_project(
    title: str = Form(...),
    category: str = Form(...),
    description: str = Form(...),
    technologies: str = Form(...),
    features: str = Form(...),
    students: str = Form(...),
    duration: str = Form(...),
    images: List[UploadFile] = File([]),
    admin_id: str = Depends(get_current_admin)
):
    # Parse JSON strings
    technologies_list = json.loads(technologies)
    features_list = json.loads(features)
    
    # Handle image uploads
    image_paths = []
    for image in images:
        file_ext = image.filename.split('.')[-1]
        file_name = f"{category}_{title.replace(' ', '_')}_{len(image_paths)}.{file_ext}"
        file_path = UPLOADS_DIR / file_name
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        
        image_paths.append(f"/uploads/{file_name}")
    
    project = Project(
        category=category,
        title=title,
        description=description,
        technologies=technologies_list,
        features=features_list,
        students=students,
        duration=duration,
        images=image_paths
    )
    
    await db.projects.insert_one(project.dict())
    logger.info(f"Project created: {project.title}")
    return project

@api_router.put("/admin/projects/{project_id}", response_model=Project)
async def update_project(
    project_id: str,
    title: str = Form(...),
    category: str = Form(...),
    description: str = Form(...),
    technologies: str = Form(...),
    features: str = Form(...),
    students: str = Form(...),
    duration: str = Form(...),
    images: List[UploadFile] = File([]),
    existing_images: str = Form("[]"),
    admin_id: str = Depends(get_current_admin)
):
    existing_project = await db.projects.find_one({"id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Parse JSON strings
    technologies_list = json.loads(technologies)
    features_list = json.loads(features)
    existing_images_list = json.loads(existing_images)
    
    # Handle new image uploads
    image_paths = existing_images_list.copy()
    for image in images:
        file_ext = image.filename.split('.')[-1]
        file_name = f"{category}_{title.replace(' ', '_')}_{len(image_paths)}.{file_ext}"
        file_path = UPLOADS_DIR / file_name
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        
        image_paths.append(f"/uploads/{file_name}")
    
    from datetime import datetime
    update_data = {
        "category": category,
        "title": title,
        "description": description,
        "technologies": technologies_list,
        "features": features_list,
        "students": students,
        "duration": duration,
        "images": image_paths,
        "updated_at": datetime.utcnow()
    }
    
    await db.projects.update_one({"id": project_id}, {"$set": update_data})
    
    updated_project = await db.projects.find_one({"id": project_id})
    logger.info(f"Project updated: {project_id}")
    return Project(**updated_project)

@api_router.delete("/admin/projects/{project_id}")
async def delete_project(
    project_id: str,
    admin_id: str = Depends(get_current_admin)
):
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Delete image files
    for image_path in project.get("images", []):
        file_path = ROOT_DIR / image_path.lstrip("/")
        if file_path.exists():
            file_path.unlink()
    
    await db.projects.delete_one({"id": project_id})
    logger.info(f"Project deleted: {project_id}")
    return {"success": True, "message": "Project deleted successfully"}

# ==================== CONTACT FORM ====================

@api_router.post("/contact")
async def submit_contact(contact: ContactCreate):
    contact_obj = Contact(**contact.dict())
    await db.contacts.insert_one(contact_obj.dict())
    logger.info(f"Contact form submitted: {contact.email}")
    return {"success": True, "message": "Contact form submitted successfully"}

@api_router.get("/admin/contacts", response_model=List[Contact])
async def get_contacts(
    status: Optional[str] = None,
    admin_id: str = Depends(get_current_admin)
):
    query = {}
    if status:
        query["status"] = status
    
    contacts = await db.contacts.find(query).sort("created_at", -1).to_list(1000)
    return [Contact(**contact) for contact in contacts]

@api_router.put("/admin/contacts/{contact_id}/status")
async def update_contact_status(
    contact_id: str,
    status_update: ContactStatusUpdate,
    admin_id: str = Depends(get_current_admin)
):
    contact = await db.contacts.find_one({"id": contact_id})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    await db.contacts.update_one(
        {"id": contact_id},
        {"$set": {"status": status_update.status}}
    )
    
    logger.info(f"Contact status updated: {contact_id} -> {status_update.status}")
    return {"success": True, "message": "Status updated successfully"}

# ==================== LEGACY ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "GenBots API - Building Future Innovators"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://genbots.online",
        "https://www.genbots.online",
        "https://gen-bots.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
