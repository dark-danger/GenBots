# GenBots Portfolio - API Contracts

## Authentication

### POST /api/admin/login
**Request:**
```json
{
  "email": "khannayash394@gmail.com",
  "password": "9996171216"
}
```
**Response:**
```json
{
  "token": "jwt_token_here",
  "admin": {
    "id": "admin_id",
    "email": "khannayash394@gmail.com",
    "name": "Admin"
  }
}
```

### POST /api/admin/verify
**Headers:** `Authorization: Bearer <token>`
**Response:**
```json
{
  "valid": true,
  "admin": { "id": "...", "email": "...", "name": "..." }
}
```

## Projects Management

### GET /api/projects
**Response:**
```json
[
  {
    "id": "project_id",
    "category": "iot",
    "title": "Smart Home Automation",
    "description": "...",
    "technologies": ["ESP32", "MQTT"],
    "features": ["Feature 1", "Feature 2"],
    "students": "Built by Class 10 students",
    "duration": "6 weeks",
    "images": ["/uploads/project1.jpg"]
  }
]
```

### POST /api/admin/projects
**Headers:** `Authorization: Bearer <token>`
**Body:** multipart/form-data
```
title: "Project Title"
category: "iot" | "robotics" | "ai"
description: "Description"
technologies: ["Tech1", "Tech2"]
features: ["Feature1", "Feature2"]
students: "Built by Class X"
duration: "X weeks"
images: [File, File]
```

### PUT /api/admin/projects/:id
**Headers:** `Authorization: Bearer <token>`
**Body:** Same as POST

### DELETE /api/admin/projects/:id
**Headers:** `Authorization: Bearer <token>`

## Contact Form

### POST /api/contact
**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "schoolName": "ABC School",
  "inquiry": "general",
  "message": "Message here"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

### GET /api/admin/contacts
**Headers:** `Authorization: Bearer <token>`
**Response:**
```json
[
  {
    "id": "contact_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "schoolName": "ABC School",
    "inquiry": "general",
    "message": "Message",
    "status": "pending" | "contacted",
    "createdAt": "2025-01-11T10:30:00Z"
  }
]
```

### PUT /api/admin/contacts/:id/status
**Headers:** `Authorization: Bearer <token>`
**Request:**
```json
{
  "status": "contacted"
}
```

## Frontend Integration

### Mock Data to Remove:
- `/app/frontend/src/pages/Projects.jsx` - Remove hardcoded projects array
- `/app/frontend/src/pages/Contact.jsx` - Connect to backend API

### New Components to Create:
- `/app/frontend/src/pages/admin/Login.jsx`
- `/app/frontend/src/pages/admin/Dashboard.jsx`
- `/app/frontend/src/pages/admin/ProjectsManagement.jsx`
- `/app/frontend/src/pages/admin/ContactsList.jsx`
- `/app/frontend/src/context/AuthContext.jsx` - For admin authentication state
