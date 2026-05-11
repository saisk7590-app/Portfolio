import { FiCode, FiDatabase, FiFigma, FiGitBranch, FiLayers, FiServer } from 'react-icons/fi'

export const siteMeta = {
  name: 'Sai Kiran',
  role: 'Full Stack Product Engineer',
  email: 'hello.saikiran.engineer@gmail.com',
  github: 'https://github.com/sai-kiran-engineer',
  linkedin: 'https://linkedin.com/in/sai-kiran-engineer',
  resumeLabel: 'Resume Coming Soon',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Engineering', to: '/engineering' },
  { label: 'Contact', to: '/contact' },
]

export const heroStats = [
  { label: 'Product lens', value: 'Usable, scalable, recruiter-ready builds' },
  { label: 'Primary stack', value: 'React, Node.js, Express, PostgreSQL' },
  { label: 'Current focus', value: 'Frontend architecture with backend thinking' },
]

export const aboutPreview = [
  {
    title: 'Frontend clarity',
    description: 'I focus on responsive interfaces that feel simple to use and clear to maintain.',
    icon: FiCode,
  },
  {
    title: 'Backend structure',
    description: 'I enjoy modeling API flows, request handling, and practical application structure.',
    icon: FiServer,
  },
  {
    title: 'Design collaboration',
    description: 'My UI/UX and Figma skills help bridge product ideas and implementation decisions.',
    icon: FiFigma,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FiCode,
    items: ['React', 'React Native', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    items: ['PostgreSQL'],
  },
  {
    title: 'Design',
    icon: FiLayers,
    items: ['Figma', 'UI/UX'],
  },
  {
    title: 'Tools',
    icon: FiGitBranch,
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export const learningJourney = [
  {
    stage: 'Python Fundamentals',
    description: 'Started with programming basics, problem-solving, and structured thinking.',
  },
  {
    stage: 'Backend Foundations',
    description: 'Learned APIs, Express.js, server-side flow, and data relationships.',
  },
  {
    stage: 'System Design Curiosity',
    description: 'Began exploring caching, RBAC, architecture tradeoffs, and request flow.',
  },
  {
    stage: 'Full Stack Product Development',
    description: 'Now building end-to-end products with UI, backend logic, and better product storytelling.',
  },
]

export const contactCards = [
  {
    label: 'Email',
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-kiran-engineer',
    href: siteMeta.linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/sai-kiran-engineer',
    href: siteMeta.github,
  },
]
