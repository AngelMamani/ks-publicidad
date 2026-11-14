import { Brand } from '@domain/constants/Brand'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'
import { SectionTitle } from '@presentation/components/ui/SectionTitle'

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            Eyebrow="Nosotros"
            Title={`${Brand.Name}: presencia que se impone`}
            Description="Somos un taller de publicidad visual enfocado en impacto, precisión y acabados premium."
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about-layout">
          <div className="about-copy">
            <p>
              En {Brand.Name} convertimos ideas en piezas de gran formato. Combinamos
              impresión digital UV, señalética 3D y rotulado profesional para marcas que
              necesitan destacarse.
            </p>
            <p>
              Nuestro estilo nace de una identidad fuerte: corona, metal y energía. Cada
              proyecto se trabaja con mirada técnica y estética de alto contraste para
              lograr resultados llamativos en calle, local o evento.
            </p>
            <div className="about-stats">
              <article>
                <strong>UV</strong>
                <span>Impresión avanzada</span>
              </article>
              <article>
                <strong>3D</strong>
                <span>Letras y logos</span>
              </article>
              <article>
                <strong>360°</strong>
                <span>Instalación total</span>
              </article>
            </div>
          </div>
          <div className="about-visual">
            <img src={AssetPaths.Productos.TallerKsProduccion} alt="Taller KS Gigantografías" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            Eyebrow="Identidad KS"
            Title="Misión y visión"
            Description="La brújula con la que fabricamos cada pieza publicitaria."
          />
          <div className="info-grid mission-vision">
            <article className="info-panel info-panel--featured">
              <span className="section-title__eyebrow">Misión</span>
              <h3>Lo que hacemos cada día</h3>
              <p>{Brand.Mission}</p>
            </article>
            <article className="info-panel info-panel--featured">
              <span className="section-title__eyebrow">Visión</span>
              <h3>A dónde vamos</h3>
              <p>{Brand.Vision}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
