# GenBots Frontend - React Application

Modern, dark-themed portfolio website for GenBots IoT Education Company.

## 🚀 Features

- **Modern UI**: Dark theme with cyan accent colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Admin Panel**: Complete authentication and content management
- **Pages**: Home, About, Programs, Projects, Contact
- **Tech Stack**: React 19, React Router, TailwindCSS, Shadcn/ui

## 📋 Prerequisites

- Node.js 24+ (LTS recommended)
- Yarn package manager
- Backend API running (see backend project)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-frontend-repo>
cd frontend
```

2. **Install dependencies**
```bash
yarn install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

For production:
```env
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

## 🎮 Running the Application

**Development Mode:**
```bash
yarn start
```
Opens on `http://localhost:3000`

**Production Build:**
```bash
yarn build
```
Creates optimized build in `build/` folder

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── admin/        # Admin panel pages
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   └── use-toast.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔑 Admin Panel Access

Access admin panel at: `http://localhost:3000/admin/login`

**Login Credentials:**
- Email: khannayash394@gmail.com
- Password: 9996171216

**Admin Features:**
- Add/Edit/Delete Projects with image uploads
- View contact form submissions
- Mark contacts as contacted/pending

## 🎨 Design System

**Colors:**
- Primary Background: `#000000` (Black)
- Secondary Background: `#0a0a0a`
- Accent: `#00FFD1` (Cyan)
- Text: `#FFFFFF` (White)

**Typography:**
- Headings: Orbitron (Google Fonts)
- Body: Rajdhani (Google Fonts)

**Components:**
- Shadcn/ui components in `src/components/ui/`
- Custom buttons with sharp edges (border-radius: 0)
- Responsive grid layouts

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Netlify
```bash
yarn build
# Deploy the build/ folder to Netlify
```

### Vercel
```bash
vercel --prod
```

### Traditional Hosting
```bash
yarn build
# Upload build/ folder to your hosting
```

**Important:** Set environment variable `REACT_APP_BACKEND_URL` in your hosting platform.

## 🔗 API Integration

All API calls use `process.env.REACT_APP_BACKEND_URL` as base URL.

**Endpoints used:**
- `GET /api/projects` - Fetch all projects
- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin login
- `GET /api/admin/contacts` - Get contact submissions
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project

## 📞 Contact Information

**GenBots**
- Email: khannayash394@gmail.com
- Phone: +91 92110 67540
- Address: TDI Espaniya Royal, Murthal, Sonipat

## 📄 License

All rights reserved © 2025 GenBots
