import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { ServiceCard } from '@presentation/components/ui/ServiceCard'
import { CtaButton } from '@presentation/components/ui/CtaButton'
import { useServices } from '@presentation/hooks/useServices'

export function ServicesPage() {
  const { Services } = useServices()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            Eyebrow="Servicios"
            Title="Impresión, fabricación e instalación"
            Description="Cobertura integral para campañas publicitarias, locales comerciales y flotas."
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="feature-grid">
            {Services.map((Item) => (
              <ServiceCard key={Item.Id} Item={Item} />
            ))}
          </div>
          <div className="home-cta-band section-cta">
            <div>
              <h2>¿Necesitas un servicio a medida?</h2>
              <p>Te asesoramos en material, medida y acabado según el uso final.</p>
            </div>
            <CtaButton To="/contacto">Solicitar cotización</CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
