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
            <img src={AssetPaths.BannerImage} alt="Fachada y taller KS" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container info-grid">
          <article className="info-panel">
            <h3>Misión</h3>
            <p>
              Diseñar e imprimir soluciones publicitarias que elevan la presencia de cada
              cliente con calidad, velocidad y fuerza visual.
            </p>
          </article>
          <article className="info-panel">
            <h3>Visión</h3>
            <p>
              Ser la referencia en gigantografías y gráfica comercial con una identidad
              futurista, animalista y profesional.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
