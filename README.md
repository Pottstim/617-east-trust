# 617 East Trust

Professional Business Consulting & Advisory Services Website

![617 East Trust](client/public/logo-main.jpg)

## 🌟 Overview

617 East Trust is a full-stack web application providing comprehensive business consulting and advisory services. The platform features a modern dark theme, database-backed intake form system, and responsive design optimized for all devices.

## ✨ Features

- **Multi-Page Website**: Home, Services, Testimonials, Contact, and Intake Form
- **Database Integration**: MySQL database with full CRUD operations
- **Intake Form System**: 6-step form with auto-save and database persistence
- **Authentication Ready**: Built-in OAuth integration
- **Responsive Design**: Mobile-first approach with dark theme
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Production Ready**: Configured for deployment to Vercel, Netlify, Railway, or self-hosted

## 🚀 Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Wouter** - Client-side routing
- **Vite** - Build tool

### Backend
- **Node.js 22** - Runtime
- **tRPC** - Type-safe API
- **Drizzle ORM** - Database ORM
- **MySQL** - Database
- **JWT** - Authentication

### Infrastructure
- **PM2** - Process management (self-hosted)
- **Nginx** - Reverse proxy (self-hosted)
- **Let's Encrypt** - SSL certificates (self-hosted)

## 📦 Installation

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm
- MySQL 8.0 or higher

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pottstim/617-east-trust.git
   cd 617-east-trust
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=mysql://user:password@localhost:3306/eastrust_db
   NODE_ENV=development
   PORT=3000
   JWT_SECRET=your_secret_key
   ```

4. **Set up the database**
   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE eastrust_db;
   
   # Run migrations
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
617-east-trust/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   └── App.tsx        # Main app component
├── server/                # Backend application
│   ├── _core/            # Core server logic
│   ├── db.ts             # Database functions
│   └── routers.ts        # tRPC routers
├── drizzle/              # Database schema
│   └── schema.ts         # Database tables
├── ecosystem.config.js   # PM2 configuration
├── nginx.conf.template   # Nginx configuration
└── package.json          # Dependencies
```

## 🗄️ Database Schema

### Tables

- **users** - User authentication and profiles
- **intake_submissions** - Form submissions from clients

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Database
pnpm db:push          # Push schema changes to database
pnpm db:studio        # Open Drizzle Studio

# Deployment
pnpm start            # Start production server
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Option 2: Self-Hosted

1. Set up Ubuntu 22.04 server
2. Run `./server-setup.sh`
3. Configure environment variables
4. Deploy with PM2 and Nginx

See [SELF_HOST_GUIDE.md](SELF_HOST_GUIDE.md) for detailed instructions.

## 🔐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# Server
NODE_ENV=production
PORT=3000

# Authentication
JWT_SECRET=your_secret_key
OAUTH_SERVER_URL=https://api.manus.im
OWNER_OPEN_ID=your_owner_id

# App Configuration
VITE_APP_ID=617-east-trust
VITE_APP_TITLE=617 East Trust
VITE_APP_LOGO=/logo-nc.png
```

## 🎨 Design System

- **Colors**: Blue and green accent colors on dark background
- **Typography**: System fonts with clear hierarchy
- **Components**: shadcn/ui component library
- **Icons**: Lucide icons
- **Responsive**: Mobile-first with Tailwind breakpoints

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `ecosystem.config.js` - PM2 process manager configuration
- `nginx.conf.template` - Nginx reverse proxy template
- `drizzle.config.ts` - Database configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Deploy to Vercel, Netlify, or Railway
- [Self-Hosting Guide](SELF_HOST_GUIDE.md) - Deploy to your own server
- [Quick Deploy](DEPLOY.md) - Quick deployment instructions

## 🤝 Contributing

This is a private project for 617 East Trust. For inquiries, contact:

- **Email**: info@617east.com
- **Phone**: (910) 315-1800
- **Website**: https://617east.com

## 📄 License

© 2025 617 East Trust. All rights reserved.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Database ORM by [Drizzle](https://orm.drizzle.team/)
- Type-safe API with [tRPC](https://trpc.io/)

---

**Need Help?**

For deployment assistance or technical support, refer to the documentation files included in this repository or contact the development team.

