# Alex McDonald Portfolio Website

## Overview

This is a personal portfolio website for Alex McDonald, a strategic communications and marketing professional and soon-to-be graduate from Carleton University. The website serves as a professional showcase featuring his experience, skills, portfolio, and contact information. Built as a modern single-page application, it includes an interactive contact form with email functionality and presents Alex's professional background in an engaging, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing (single-page application with home and 404 pages)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Build System**: Vite for fast development and optimized production builds, with ESBuild for server bundling
- **Development**: Hot module replacement and error overlay for enhanced developer experience
- **API Design**: RESTful endpoint structure with dedicated contact form submission handling

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for frontend/backend consistency
- **Migrations**: Drizzle Kit for database migration management
- **Connection**: Neon Database serverless PostgreSQL for cloud-hosted data persistence

### Authentication and Authorization
- **Current Implementation**: No authentication system (static portfolio site)
- **Session Management**: Express sessions configured with PostgreSQL storage (connect-pg-simple) for potential future features
- **Security**: CORS configured, input validation with Zod schemas

### Contact Form System
- **Validation**: Comprehensive form validation with required fields, email format checking, and minimum message length
- **Email Processing**: Nodemailer integration for automated email sending
- **Dual Email Flow**: Sends notification to Alex and auto-reply confirmation to form submitter
- **Error Handling**: Graceful error management with user-friendly feedback via toast notifications

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern frontend development
- **TypeScript**: Full TypeScript support for type safety across the application
- **Vite**: Build tool and development server with plugin ecosystem for React and development enhancements

### UI and Styling
- **Radix UI**: Comprehensive primitive component library for accessible UI elements (dialogs, forms, navigation, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer for consistent styling
- **Class Variance Authority**: Type-safe utility for managing conditional CSS classes
- **Lucide React**: Icon library for consistent iconography throughout the interface

### Database and Backend Services
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL database service for cloud deployment
- **Express.js**: Web application framework for API endpoints and server functionality

### Email and Communication
- **Nodemailer**: Email sending capability for contact form submissions and automated responses
- **Gmail Integration**: Configured to use Gmail SMTP for reliable email delivery

### Development and Build Tools
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **TSX**: TypeScript execution environment for development workflow
- **Replit Integration**: Development environment plugins and runtime error handling for Replit deployment

### Utility Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Clsx**: Conditional className utility for dynamic styling
- **Nanoid**: Unique ID generation for various application needs
- **Zod**: Schema validation library for runtime type checking and form validation