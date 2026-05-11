import amsAttendanceOverview from '../assets/projects/ams/admin/attendance-overview.svg'
import amsFacultyPanel from '../assets/projects/ams/admin/faculty-panel.svg'
import amsThumbnail from '../assets/projects/ams/thumbnails/project-thumb.svg'
import scrapAdminAnalytics from '../assets/projects/scrapcollector/admin/analytics.svg'
import scrapAdminDashboard from '../assets/projects/scrapcollector/admin/dashboard.svg'
import scrapMobileHome from '../assets/projects/scrapcollector/mobile/mobile-home.svg'
import scrapPickupStatus from '../assets/projects/scrapcollector/mobile/pickup-status.svg'
import scrapThumbnail from '../assets/projects/scrapcollector/thumbnails/project-thumb.svg'
import subscriptionDashboard from '../assets/projects/subscription-tracker/admin/dashboard.svg'
import subscriptionReminders from '../assets/projects/subscription-tracker/mobile/reminders.svg'
import subscriptionThumbnail from '../assets/projects/subscription-tracker/thumbnails/project-thumb.svg'

export const projects = [
  {
    slug: 'scrapcollector',
    title: 'ScrapCollector',
    category: 'Full Stack Platform',
    role: 'Product Engineer',
    summary:
      'A scrap collection management platform with a React Native user app, React admin dashboard, Node.js backend, PostgreSQL database design, and product flows planned in Figma.',
    shortDescription:
      'Built to simplify pickup requests, role-based operations, and visibility across mobile users and admin teams.',
    featured: true,
    techStack: ['React Native', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Figma'],
    architectureHighlights: [
      'Separated mobile, dashboard, and backend responsibilities for easier scaling.',
      'Included role-based access thinking for admins, operators, and end users.',
      'Focused on product flow from request creation to pickup status tracking.',
    ],
    features: [
      'Mobile request creation and pickup status tracking',
      'Admin dashboard for operations visibility and request management',
      'Role-aware access model for different operational users',
      'Backend-ready API structure designed for both mobile and web clients',
    ],
    overview:
      'ScrapCollector is the strongest example of how I like to build: start from the user problem, plan the experience carefully, and connect mobile, web, and backend thinking into one product story.',
    architecture:
      'The project is designed around separate clients for users and admins, supported by a backend that manages requests, role checks, and data flow. This makes the frontend easier to maintain and gives the system a cleaner scaling path.',
    rbac:
      'The platform includes role-based access thinking so end users can request pickups, operators can manage workflows, and admins can monitor operations with the right permissions.',
    backendExplanation:
      'The backend is modeled as a REST API layer that would handle authentication, request creation, assignment workflows, and status updates. PostgreSQL fits the structured relationship between users, requests, and operational states.',
    challenges: [
      'Designing a user flow that stays simple for mobile users but still supports operational complexity.',
      'Thinking through how multiple roles should interact without exposing unnecessary actions.',
      'Balancing UI clarity with a realistic full-stack structure for future scaling.',
    ],
    learnings: [
      'Product thinking improves technical decisions because user flow becomes clearer.',
      'RBAC planning should happen early because it affects both UI and backend structure.',
      'A strong architecture story helps recruiters understand engineering maturity quickly.',
    ],
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
    thumbnail: scrapThumbnail,
    screens: {
      mobile: [
        { title: 'Mobile Home', src: scrapMobileHome },
        { title: 'Pickup Status', src: scrapPickupStatus },
      ],
      admin: [
        { title: 'Admin Dashboard', src: scrapAdminDashboard },
        { title: 'Analytics Overview', src: scrapAdminAnalytics },
      ],
    },
  },
  {
    slug: 'ams',
    title: 'AMS',
    category: 'Operations Dashboard',
    role: 'Frontend Developer',
    summary:
      'A mock academic management system concept focused on attendance visibility, academic tracking, and clear dashboard workflows for faculty and administrators.',
    shortDescription:
      'Designed as a dashboard-first product with responsive cards, organized modules, and role-aware admin workflows.',
    featured: false,
    techStack: ['React', 'Tailwind CSS', 'Node.js Concepts', 'Figma'],
    architectureHighlights: [
      'Dashboard-first UI architecture',
      'Module separation for students, faculty, and reports',
      'Scalable structure for management workflows',
    ],
    features: [
      'Attendance monitoring',
      'Faculty panel workflows',
      'Report-oriented dashboard cards',
    ],
    overview:
      'AMS is a structured dashboard concept that shows how I organize information-heavy interfaces in a clean and scalable way.',
    architecture:
      'The design breaks product areas into manageable dashboard modules so different users can access their workflows clearly.',
    rbac:
      'Role separation would allow faculty, admins, and students to see different features depending on permissions.',
    backendExplanation:
      'This frontend-first concept is designed to sit on top of REST APIs for attendance, reporting, and account management.',
    challenges: [
      'Making a dense dashboard feel simple.',
      'Balancing data visibility with a clean layout.',
    ],
    learnings: [
      'Information architecture matters as much as styling in dashboard products.',
      'Scalable card systems make large interfaces easier to expand.',
    ],
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
    thumbnail: amsThumbnail,
    screens: {
      mobile: [],
      admin: [
        { title: 'Attendance Overview', src: amsAttendanceOverview },
        { title: 'Faculty Panel', src: amsFacultyPanel },
      ],
    },
  },
  {
    slug: 'subscription-tracker',
    title: 'Subscription Tracker',
    category: 'Consumer Productivity App',
    role: 'Full Stack Learner',
    summary:
      'A subscription management concept that helps users organize recurring payments, view reminders, and track upcoming renewals through a clean product interface.',
    shortDescription:
      'Built as a product thinking exercise around reminders, recurring billing visibility, and simple financial awareness.',
    featured: false,
    techStack: ['React', 'React Native Concepts', 'Tailwind CSS', 'Figma'],
    architectureHighlights: [
      'Reminder-focused user flow',
      'Clean summary dashboard layout',
      'Designed to be extendable with notifications and analytics',
    ],
    features: [
      'Upcoming renewal reminders',
      'Subscription summary dashboard',
      'Category-based visibility',
    ],
    overview:
      'This concept explores how small but useful product ideas can become structured, recruiter-friendly case studies.',
    architecture:
      'The interface is planned around a summary dashboard, reminder flows, and category filters so the product can grow without becoming cluttered.',
    rbac:
      'This product is primarily single-user focused, but admin-style support roles could be added if it evolved into a larger platform.',
    backendExplanation:
      'A backend layer would eventually handle recurring plans, reminder scheduling, and user-specific subscription records.',
    challenges: [
      'Keeping the interface lightweight while still informative.',
      'Turning a simple concept into a well-scoped product story.',
    ],
    learnings: [
      'Small product ideas still benefit from strong architecture and UX planning.',
      'Recruiter-facing case studies improve when the problem and decision-making are clear.',
    ],
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
    thumbnail: subscriptionThumbnail,
    screens: {
      mobile: [{ title: 'Renewal Reminders', src: subscriptionReminders }],
      admin: [{ title: 'Subscription Dashboard', src: subscriptionDashboard }],
    },
  },
]
