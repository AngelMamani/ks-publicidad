import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Brand } from '@domain/constants/Brand'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'
import { Container } from '@infrastructure/di/Container'

export function Header() {
  const [IsOpen, setIsOpen] = useState(false)
  const NavigationItems = Container.NavigationService.GetItems()

  function CloseMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand-link" to="/" onClick={CloseMenu}>
          <img src={AssetPaths.LogoMark} alt={Brand.Name} />
          <span className="brand-link__text">
            <strong>{Brand.Name}</strong>
            <span>{Brand.Tagline}</span>
          </span>
        </NavLink>

        <nav className="nav-desktop" aria-label="Principal">
          {NavigationItems.map((Item) => (
            <NavLink
              key={Item.Id}
              to={Item.Path}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              end={Item.Path === '/'}
            >
              {Item.Label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={IsOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={IsOpen}
          onClick={() => setIsOpen((Current) => !Current)}
        >
          <span />
        </button>
      </div>

      <nav className={`nav-mobile${IsOpen ? ' is-open' : ''}`} aria-label="Móvil">
        {NavigationItems.map((Item) => (
          <NavLink
            key={Item.Id}
            to={Item.Path}
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            end={Item.Path === '/'}
            onClick={CloseMenu}
          >
            {Item.Label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
