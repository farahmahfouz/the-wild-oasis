# The Wild Oasis - Hotel Management System

A modern, full-stack hotel management application built with React and Supabase. This project is part of Jonas Schmedtmann's React course, demonstrating advanced React concepts, state management, and real-time database operations.

##  Project Overview

The Wild Oasis is a comprehensive hotel management system that allows hotel staff to manage:
- **Cabins/Rooms**: Add, edit, and manage cabin information
- **Bookings**: Handle reservations, check-ins, and check-outs
- **Guests**: Manage guest information and profiles
- **Dashboard**: Real-time analytics and statistics
- **Settings**: Configure application settings
- **User Management**: Handle staff accounts and authentication

##  Features

### Core Functionality
- **Authentication System**: Secure login/logout with Supabase Auth
- **Real-time Data**: Live updates using Supabase real-time subscriptions
- **Responsive Design**: Mobile-first approach with dark/light mode
- **Dashboard Analytics**: Charts and statistics for business insights
- **Booking Management**: Complete booking lifecycle from reservation to checkout
- **Cabin Management**: CRUD operations for cabin/room management
- **User Management**: Staff account management and permissions

### Technical Features
- **Protected Routes**: Secure access to authenticated users only
- **Form Validation**: Comprehensive form handling with React Hook Form
- **Error Handling**: Graceful error boundaries and user feedback
- **Loading States**: Optimistic UI updates and loading indicators
- **Data Caching**: Efficient data management with React Query
- **File Upload**: Image upload functionality for cabin photos

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing and navigation
- **Styled Components**: CSS-in-JS styling solution
- **React Hook Form**: Form state management and validation
- **React Query (TanStack Query)**: Server state management and caching
- **React Hot Toast**: User notifications and feedback
- **React Icons**: Icon library for UI elements
- **Recharts**: Data visualization and charts
- **Date-fns**: Date manipulation utilities

### Backend & Database
- **Supabase**: Backend-as-a-Service (BaaS) platform
  - PostgreSQL database
  - Real-time subscriptions
  - Row Level Security (RLS)
  - Authentication system
  - File storage

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting
- **React Query DevTools**: Development debugging tools

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React context providers
├── data/               # Static data and assets
├── features/           # Feature-based modules
│   ├── authentication/ # Auth-related components and hooks
│   ├── bookings/       # Booking management
│   ├── cabins/         # Cabin management
│   ├── check-in-out/   # Check-in/out functionality
│   ├── dashboard/      # Dashboard components
│   └── settings/       # Settings management
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API and external service integrations
├── styles/             # Global styles and themes
├── ui/                 # Base UI components
└── utils/              # Utility functions and constants
```

This README provides a comprehensive overview of your "The Wild Oasis" project, including:

1. **Project description** - What the application does
2. **Features** - Both functional and technical features
3. **Tech stack** - All the technologies and libraries used
4. **Project structure** - How the code is organized
5. **Setup instructions** - How to get the project running
6. **Course information** - Attribution to Jonas Schmedtmann's course
7. **Professional formatting** - Clean, organized structure with emojis and proper sections

The README highlights that this is a hotel management system with features like booking management, cabin management, dashboard analytics, and user authentication, all built with modern React technologies and Supabase as the backend.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/farahmahfouz/the-wild-oasis.gitl>
   cd the-wild-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI/UX Features

- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive user interface
- **Loading States**: Smooth loading indicators
- **Toast Notifications**: User feedback for actions
- **Data Tables**: Sortable and filterable data tables
- **Charts**: Interactive dashboard charts

## 🔐 Authentication

The application uses Supabase authentication with:
- Email/password login
- Protected routes
- User session management
- Role-based access control

## 📊 Database Schema

The Supabase database includes tables for:
- `cabins` - Cabin/room information
- `bookings` - Reservation data
- `guests` - Guest profiles
- `users` - Staff accounts
- `settings` - Application settings

##  Course Information

This project was built as part of **Jonas Schmedtmann's React Course**. The course covers:

- Advanced React concepts and patterns
- State management with React Query
- Modern styling with Styled Components
- Backend integration with Supabase
- Real-time applications
- Authentication and authorization
- Form handling and validation
- Error boundaries and error handling
- Performance optimization
- Modern development workflows

##  Contributing

This is a course project, but feel free to:
- Report bugs
- Suggest improvements
- Fork and experiment with the code

## 📝 License

This project is created for educational purposes as part of Jonas Schmedtmann's React course.

##  Acknowledgments

- **Jonas Schmedtmann** - Course instructor and project creator
- **Supabase** - Backend-as-a-Service platform
- **React Team** - Amazing frontend framework
- **Open Source Community** - All the amazing libraries used in this project

---

**Note**: This is a demonstration project built for learning purposes. The Supabase credentials in the code are for educational use only and should be replaced with your own credentials for production use.
