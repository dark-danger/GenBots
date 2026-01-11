from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Admin Models
class AdminLogin(BaseModel):
    email: EmailStr
    password: str

class Admin(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: str
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AdminResponse(BaseModel):
    id: str
    email: str
    name: str

class LoginResponse(BaseModel):
    token: str
    admin: AdminResponse

# Project Models
class ProjectCreate(BaseModel):
    category: str  # iot, robotics, ai
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    students: str
    duration: str

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    students: str
    duration: str
    images: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    schoolName: Optional[str] = None
    inquiry: str
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    schoolName: Optional[str] = None
    inquiry: str
    message: str
    status: str = "pending"  # pending, contacted
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactStatusUpdate(BaseModel):
    status: str
