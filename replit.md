# Muhammad Fazeel - Technical Operations Resume Website

## Overview

This is a modern, responsive resume website for Muhammad Fazeel, a Technical Operations Coordinator with 7 years of Computer Science & IT experience. The website showcases his professional background, technical skills, projects, and career achievements through a sophisticated, minimalist design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React hooks and TanStack Query for server state
- **Animations**: Framer Motion for smooth transitions and scroll reveals
- **UI Components**: Radix UI primitives for accessibility-first components

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: Vite for fast development and hot module replacement
- **Build System**: ESBuild for production bundling

### Database & ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with TypeScript
- **Schema**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### 1. Component Structure
- **Navigation**: Sticky navigation with theme switching and smooth scrolling
- **Hero Section**: Profile introduction with contact information
- **Career Profile**: Professional summary
- **Skills Section**: Categorized technical skills with visual badges
- **Projects Section**: Portfolio projects with tech stack details
- **Demonstrations Section**: Web and ML demo showcases
- **Experience Section**: Work history with achievements
- **Education Section**: Academic background
- **Certifications Section**: Professional certifications
- **Footer**: Contact information and additional links

### 2. Theme System
- **Multi-theme Support**: Light, Dark, Blue Professional, Green Creative themes
- **CSS Variables**: Custom theme variables for consistent styling
- **Theme Persistence**: Local storage for user preference retention

### 3. Responsive Design
- **Mobile-First**: Tailwind CSS responsive utilities
- **Breakpoint Management**: Custom hooks for mobile detection
- **Flexible Layouts**: Grid and flexbox for adaptive layouts

## Data Flow

### 1. Static Content
- Resume content is embedded directly in components
- Profile data, skills, projects, and experience are hardcoded
- No dynamic data fetching currently implemented

### 2. Client-Side Interactions
- Smooth scrolling navigation
- Theme switching with immediate visual feedback
- Scroll-based animations and reveals
- Print functionality for resume export

### 3. Future Data Integration
- Backend routes are scaffolded for future API integration
- TanStack Query configured for server state management
- Storage interface ready for CRUD operations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animation**: Framer Motion
- **State Management**: TanStack React Query

### Backend Dependencies
- **Server**: Express.js, Node.js types
- **Database**: Drizzle ORM, Neon Database serverless
- **Development**: Vite, ESBuild, TSX for development server

### Build Tools
- **TypeScript**: Full TypeScript configuration
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing with Tailwind
- **ESLint/Prettier**: Code quality (implicit in shadcn setup)

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` with hot module replacement
- **Type Checking**: `npm run check` for TypeScript validation
- **Database**: `npm run db:push` for schema synchronization

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Static Assets**: Served from build output directory

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Replit Integration**: Configured for Replit deployment with dev banner

### Hosting Considerations
- **Static Hosting**: Frontend can be deployed to Netlify, Vercel, or similar
- **Full-Stack Hosting**: Complete application ready for platforms supporting Node.js
- **Database**: Configured for Neon Database (serverless PostgreSQL)

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```