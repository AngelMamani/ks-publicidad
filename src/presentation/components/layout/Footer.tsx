import { Link } from 'react-router-dom'
import { Brand } from '@domain/constants/Brand'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'
import { Container } from '@infrastructure/di/Container'
import { useContact } from '@presentation/hooks/useContact'

export function Footer() {
  const NavigationItems = Container.NavigationService.GetItems()
  const { Info } = useContact()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={AssetPaths.LogoMark} alt={Brand.Name} />
          <h3>{Brand.Name}</h3>
          <p>
            {Brand.Tagline}. {Brand.Slogan}.
          </p>
        </div>

        <div>
          <h3>Menú</h3>
          <ul className="site-footer__links">
            {NavigationItems.map((Item) => (
              <li key={Item.Id}>
                <Link to={Item.Path}>{Item.Label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul className="site-footer__contact">
            {Info?.Phones.map((Phone) => (
              <li key={Phone}>
                <a href={`tel:${Phone.replace(/\s/g, '')}`}>{Phone}</a>
              </li>
            ))}
            {Info ? <li>{Info.Address}</li> : null}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {Brand.Name}
        </span>
        <span>Publicidad de alto impacto</span>
      </div>
    </footer>
  )
}
