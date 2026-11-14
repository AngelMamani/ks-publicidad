import type { Service } from '@domain/entities/Service'

interface ServiceCardProps {
  readonly Item: Service
}

export function ServiceCard({ Item }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="service-card__highlight">{Item.Highlight}</span>
      <h3>{Item.Title}</h3>
      <p>{Item.Description}</p>
    </article>
  )
}
