import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

function NotFoundPage() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="404"
          title="This page could not be found."
          description="The portfolio route you tried does not exist in this frontend-only build."
        />
        <div className="mt-8">
          <Link className="secondary-button" to="/">
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
