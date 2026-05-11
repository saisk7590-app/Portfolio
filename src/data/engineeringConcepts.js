export const engineeringConcepts = [
  {
    slug: 'otp-flow',
    title: 'How OTP Works',
    summary:
      'The server creates a short-lived code, sends it to the user, verifies it on submission, and expires it quickly to reduce misuse.',
    visualLabel: 'Generate → Deliver → Verify → Expire',
  },
  {
    slug: 'search-suggestions',
    title: 'E-commerce Search Suggestions',
    summary:
      'Search suggestions often combine indexed keywords, popular queries, and partial matches so users can discover products faster with fewer keystrokes.',
    visualLabel: 'Query → Index → Ranking → Suggestions',
  },
  {
    slug: 'redis-caching',
    title: 'Redis Caching Basics',
    summary:
      'Redis stores frequently requested data in memory so the app can respond faster and reduce repeated database reads.',
    visualLabel: 'Request → Cache Check → DB Fallback',
  },
  {
    slug: 'rbac-architecture',
    title: 'RBAC Architecture',
    summary:
      'Role-based access control gives different permissions to different user types so admins, operators, and customers only access what they need.',
    visualLabel: 'User → Role → Permissions → Access',
  },
  {
    slug: 'auth-flow',
    title: 'Authentication Flow',
    summary:
      'Authentication checks who the user is, usually by validating credentials or tokens before protected routes or actions are allowed.',
    visualLabel: 'Login → Verify → Token → Protected Route',
  },
  {
    slug: 'system-design',
    title: 'System Design Learning',
    summary:
      'My current learning includes request flow, scaling basics, database choices, and service boundaries for real-world applications.',
    visualLabel: 'Clients → API → Services → Data',
  },
]
