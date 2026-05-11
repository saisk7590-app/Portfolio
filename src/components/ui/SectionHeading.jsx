import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className={`section-copy ${centered ? 'mx-auto' : ''}`}>{description}</p>
    </Reveal>
  )
}

export default SectionHeading
