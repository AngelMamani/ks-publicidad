import type { CatalogItem } from '@domain/entities/CatalogItem'

interface CatalogCardProps {
  readonly Item: CatalogItem
}

export function CatalogCard({ Item }: CatalogCardProps) {
  return (
    <article className="catalog-card">
      <div className="media-card__image">
        <img src={Item.Image} alt={Item.Name} loading="lazy" />
      </div>
      <div className="media-card__body">
        <span className="catalog-card__category">{Item.Category}</span>
        <h3>{Item.Name}</h3>
        <p>{Item.Description}</p>
        <div className="catalog-card__specs">{Item.Specs}</div>
      </div>
    </article>
  )
}
