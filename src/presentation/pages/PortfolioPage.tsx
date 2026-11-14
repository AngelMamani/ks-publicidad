import { PortfolioCard } from '@presentation/components/ui/PortfolioCard'
import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { CtaButton } from '@presentation/components/ui/CtaButton'
import { usePortfolio } from '@presentation/hooks/usePortfolio'

export function PortfolioPage() {
  const { Items } = usePortfolio()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            Eyebrow="Portafolio"
            Title="Trabajos con presencia de rey"
            Description="Proyectos de fachada, evento, rotulado e impresión UV con identidad KS."
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="portfolio-grid">
            {Items.map((Item) => (
              <PortfolioCard key={Item.Id} Item={Item} />
            ))}
          </div>
          <div className="home-cta-band section-cta">
            <div>
              <h2>Tu próximo proyecto puede estar aquí</h2>
              <p>Cuéntanos el formato y te proponemos materiales y acabados.</p>
            </div>
            <CtaButton To="/contacto">Empezar proyecto</CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
