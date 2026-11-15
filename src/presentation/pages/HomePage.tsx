import { Brand } from '@domain/constants/Brand'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'
import { CtaButton } from '@presentation/components/ui/CtaButton'
import { SectionTitle } from '@presentation/components/ui/SectionTitle'
import { ServiceCard } from '@presentation/components/ui/ServiceCard'
import { VideoHero } from '@presentation/components/ui/VideoHero'
import { useServices } from '@presentation/hooks/useServices'

export function HomePage() {
  const { Services } = useServices()
  const FeaturedServices = Services.slice(0, 3)

  return (
    <>
      <VideoHero />

      <section className="section section--tight">
        <div className="container">
          <div className="home-strip">
            <strong>{Brand.Slogan}</strong>
            <p>
              Producción gráfica para campañas de gran alcance: diseño, impresión de alta
              calidad, montaje y logística con identidad premium.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            Eyebrow="Nuestra esencia"
            Title="Misión y visión"
            Description="La identidad que impulsa cada proyecto de KS."
          />
          <div className="info-grid mission-vision">
            <article className="info-panel info-panel--featured">
              <h3>Misión</h3>
              <p>{Brand.Mission}</p>
            </article>
            <article className="info-panel info-panel--featured">
              <h3>Visión</h3>
              <p>{Brand.Vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            Eyebrow="Potencia visual"
            Title="Servicios con fuerza de marca"
            Description="Soluciones de impresión y señalética para que tu negocio se vea imponente."
          />
          <div className="feature-grid">
            {FeaturedServices.map((Item) => (
              <ServiceCard key={Item.Id} Item={Item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-preview">
          <div>
            <SectionTitle
              Eyebrow="Taller KS"
              Title="De la idea a la fachada"
              Description="Trabajamos con tecnología de gran formato para letras, logos, lonas y ambientaciones comerciales."
            />
            <CtaButton To="/portafolio">Ver portafolio</CtaButton>
          </div>
          <div className="about-visual">
            <img src={AssetPaths.Productos.TallerKsProduccion} alt="Taller KS Gigantografías" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-cta-band">
            <div>
              <h2>¿Listo para dominar tu espacio visual?</h2>
              <p>Cotiza tu proyecto y recibe asesoría técnica de materiales y formato.</p>
            </div>
            <CtaButton To="/contacto">Hablar con KS</CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
