import type { PortfolioItem } from '@domain/entities/PortfolioItem'

interface PortfolioCardProps {
  readonly Item: PortfolioItem
}

export function PortfolioCard({ Item }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <div className="media-card__image">
        <img src={Item.Image} alt={Item.Title} loading="lazy" />
      </div>
      <div className="media-card__body">
        <span className="portfolio-card__category">{Item.Category}</span>
        <h3>{Item.Title}</h3>
        <p>{Item.Description}</p>
      </div>
    </article>
  )
}
