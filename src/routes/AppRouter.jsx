import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import ContactPage from '../pages/ContactPage'
import EngineeringPage from '../pages/EngineeringPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import ProjectsPage from '../pages/ProjectsPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
