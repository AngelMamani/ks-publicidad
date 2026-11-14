import { CatalogCard } from '@presentation/components/ui/CatalogCard'
import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { useCatalog } from '@presentation/hooks/useCatalog'

export function CatalogPage() {
  const { Items } = useCatalog()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            Eyebrow="Catálogo"
            Title="Piezas listas para impactar"
            Description="Selección de productos y formatos más solicitados. Sin carrito: cotización directa."
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="catalog-grid">
            {Items.map((Item) => (
              <CatalogCard key={Item.Id} Item={Item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
