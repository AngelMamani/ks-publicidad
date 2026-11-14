import type { PortfolioItem } from '@domain/entities/PortfolioItem'

interface PortfolioCardProps {
  readonly Item: PortfolioItem
}

export function PortfolioCard({ Item }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <span className="portfolio-card__category">{Item.Category}</span>
      <h3>{Item.Title}</h3>
      <p>{Item.Description}</p>
    </article>
  )
}
