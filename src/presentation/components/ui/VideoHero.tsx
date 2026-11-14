import { Brand } from '@domain/constants/Brand'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'
import { CtaButton } from '@presentation/components/ui/CtaButton'

export function VideoHero() {
  return (
    <section className="video-hero" aria-label="Banner principal KS">
      <div className="video-hero__media">
        <video autoPlay muted loop playsInline poster={AssetPaths.BannerImage}>
          <source src={AssetPaths.HeroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="video-hero__veil" />
      <div className="video-hero__content">
        <img
          className="video-hero__brand"
          src={AssetPaths.LogoHorizontal}
          alt={Brand.Name}
        />
        <h1>{Brand.HeroHeadline}</h1>
        <p className="video-hero__support">{Brand.HeroSupport}</p>
        <div className="video-hero__actions">
          <CtaButton To="/servicios">Ver servicios</CtaButton>
          <CtaButton To="/contacto" Variant="ghost">
            Cotizar ahora
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
