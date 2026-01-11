# GenBots Backend - FastAPI Application

RESTful API for GenBots IoT Education Company portfolio website.

## 🚀 Features

- **FastAPI**: Modern, fast Python web framework
- **MongoDB**: Database for projects and contacts
- **JWT Authentication**: Secure admin authentication
- **File Uploads**: Image upload support for projects
- **CORS Enabled**: Cross-origin requests supported

## 📋 Prerequisites

- Python 3.11+
- MongoDB (local or Atlas)
- pip or virtualenv

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-backend-repo>
cd backend
```

2. **Create virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure environment variables**

Create a `.env` file in the root directory:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=genbots
JWT_SECRET_KEY=genbots-secret-key-2025
```

For MongoDB Atlas:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=genbots
JWT_SECRET_KEY=your-secret-key-here
```

## 🎮 Running the Application

**Development Mode:**
```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

**Production Mode:**
```bash
uvicorn server:app --host 0.0.0.0 --port 8001
```

API will be available at: `http://localhost:8001`

## 📁 Project Structure

```
backend/
├── models.py          # Pydantic models
├── auth.py            # JWT authentication
├── server.py          # Main FastAPI application
├── uploads/           # Uploaded project images
├── .env               # Environment variables
├── requirements.txt   # Python dependencies
└── README.md
```

## 📡 API Endpoints

### Public Endpoints

**Health Check**
```
GET /api/
Response: {"message": "GenBots API - Building Future Innovators"}
```

**Get All Projects**
```
GET /api/projects?category=iot
Response: Array of project objects
```

**Submit Contact Form**
```
POST /api/contact
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "schoolName": "ABC School",
  "inquiry": "general",
  "message": "Your message"
}
```

### Admin Endpoints (Requires Authentication)

**Admin Login**
```
POST /api/admin/login
Body: {
  "email": "khannayash394@gmail.com",
  "password": "9996171216"
}
Response: {
  "token": "jwt_token",
  "admin": {...}
}
```

**Verify Token**
```
POST /api/admin/verify
Headers: Authorization: Bearer <token>
```

**Get All Contacts**
```
GET /api/admin/contacts
Headers: Authorization: Bearer <token>
```

**Update Contact Status**
```
PUT /api/admin/contacts/:id/status
Headers: Authorization: Bearer <token>
Body: {"status": "contacted"}
```

**Create Project**
```
POST /api/admin/projects
Headers: Authorization: Bearer <token>
Content-Type: multipart/form-data
Body: FormData with fields:
  - title
  - category
  - description
  - technologies (JSON string)
  - features (JSON string)
  - students
  - duration
  - images (files)
```

**Update Project**
```
PUT /api/admin/projects/:id
Headers: Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Delete Project**
```
DELETE /api/admin/projects/:id
Headers: Authorization: Bearer <token>
```

## 🗄️ Database Schema

### Collections

**admins**
```json
{
  "id": "uuid",
  "email": "string",
  "name": "string",
  "password_hash": "string",
  "created_at": "datetime"
}
```

**projects**
```json
{
  "id": "uuid",
  "category": "iot|robotics|ai",
  "title": "string",
  "description": "string",
  "technologies": ["string"],
  "features": ["string"],
  "students": "string",
  "duration": "string",
  "images": ["string"],
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

**contacts**
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string",
  "schoolName": "string",
  "inquiry": "string",
  "message": "string",
  "status": "pending|contacted",
  "created_at": "datetime"
}
```

## 🔐 Authentication

**Default Admin Credentials:**
- Email: khannayash394@gmail.com
- Password: 9996171216

Admin user is automatically created on first startup.

**JWT Token:**
- Expires in 24 hours
- Include in Authorization header: `Bearer <token>`

## 📤 File Uploads

Project images are stored in `uploads/` directory.

**Supported formats:** JPG, PNG, JPEG, WebP

**Access uploaded files:**
```
http://localhost:8001/uploads/filename.jpg
```

## 🚀 Deployment

### Docker

Create `Dockerfile`:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

### Heroku

Create `Procfile`:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

### Railway / Render

Build Command: `pip install -r requirements.txt`
Start Command: `uvicorn server:app --host 0.0.0.0 --port 8001`

## 🔧 Environment Variables

**Required:**
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name

**Optional:**
- `JWT_SECRET_KEY` - Secret key for JWT (default: genbots-secret-key-2025)

## 📊 API Documentation

FastAPI auto-generates interactive API docs:

- Swagger UI: `http://localhost:8001/docs`
- ReDoc: `http://localhost:8001/redoc`

## 🧪 Testing

**Test API with curl:**

```bash
# Health check
curl http://localhost:8001/api/

# Get projects
curl http://localhost:8001/api/projects

# Login
curl -X POST http://localhost:8001/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"khannayash394@gmail.com","password":"9996171216"}'
```

## 📞 Support

**GenBots**
- Email: khannayash394@gmail.com
- Phone: +91 92110 67540

## 📄 License

All rights reserved © 2025 GenBots
