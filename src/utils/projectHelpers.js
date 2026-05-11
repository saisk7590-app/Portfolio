import { projects } from '../data/projects'

export const getFeaturedProject = () => projects.find((project) => project.featured)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
