import type { CatalogItem } from '@domain/entities/CatalogItem'

interface CatalogCardProps {
  readonly Item: CatalogItem
}

export function CatalogCard({ Item }: CatalogCardProps) {
  return (
    <article className="catalog-card">
      <span className="catalog-card__category">{Item.Category}</span>
      <h3>{Item.Name}</h3>
      <p>{Item.Description}</p>
      <div className="catalog-card__specs">{Item.Specs}</div>
    </article>
  )
}
