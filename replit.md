# Personal Portfolio Website

## Overview

This is a modern personal portfolio website built as a full-stack application showcasing professional experience, projects, and skills. The application features a sleek single-page design with smooth animations and a professional aesthetic, specifically designed for a product manager's portfolio.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Design**: RESTful API with structured error handling
- **Request Processing**: JSON parsing with URL-encoded form support
- **Logging**: Custom request/response logging middleware

### Build System
- **Bundler**: Vite for frontend development and building
- **Compilation**: ESBuild for backend compilation
- **Development**: Hot module replacement with Vite dev server
- **TypeScript**: Strict type checking across the entire stack

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scroll-to-section functionality
- **Hero Section**: Professional introduction with call-to-action buttons
- **Experience Timeline**: Interactive timeline showcasing career progression
- **Product Showcase**: Portfolio of key products and achievements
- **Skills Section**: Technical and domain expertise with progress indicators
- **Achievements Dashboard**: Metrics and impact visualization
- **Contact Form**: Validated contact form with proper error handling
- **Footer**: Additional navigation and social links

### Backend Components
- **Contact API**: Form submission endpoint with Zod validation
- **User Management**: Basic user schema and in-memory storage (prepared for database)
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Static File Serving**: Production-ready static file serving

## Data Flow

1. **Frontend to Backend**: Contact form submissions via POST to `/api/contact`
2. **Validation**: Server-side validation using Zod schemas
3. **Response**: JSON responses with success/error states
4. **Client Updates**: Toast notifications for user feedback
5. **Error Handling**: Proper error propagation and user-friendly messages

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide Icons**: Modern icon library

### Data Management
- **React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### Database (Prepared)
- **Drizzle ORM**: Type-safe database interactions
- **PostgreSQL**: Configured for Neon Database
- **Schema Management**: Shared schema definitions

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with Node.js for TypeScript execution
- **Database**: PostgreSQL with Drizzle migrations
- **Environment**: Replit-optimized with development banners

### Production Build
- **Frontend**: Static files built to `dist/public`
- **Backend**: Compiled to `dist/index.js` with ESBuild
- **Serving**: Express serves both API and static files
- **Database**: Production PostgreSQL via DATABASE_URL

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Build Process**: Separate frontend and backend build steps
- **Asset Handling**: Proper static file serving in production
- **Error Handling**: Production-ready error responses

### Replit Integration
- **Development**: Integrated with Replit's development environment
- **Runtime Error Overlay**: Development error handling
- **Cartographer**: Replit's development tools integration

The application is structured as a monorepo with clear separation between client, server, and shared code, making it easy to maintain and extend while providing a professional showcase for the portfolio owner's product management and technical skills.