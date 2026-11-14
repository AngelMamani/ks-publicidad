import type { NavigationItem } from '@domain/entities/NavigationItem'

export const NavigationItems: readonly NavigationItem[] = [
  { Id: 'inicio', Label: 'INICIO', Path: '/' },
  { Id: 'nosotros', Label: 'NOSOTROS', Path: '/nosotros' },
  { Id: 'servicios', Label: 'SERVICIOS', Path: '/servicios' },
  { Id: 'catalogo', Label: 'CATÁLOGO', Path: '/catalogo' },
  { Id: 'portafolio', Label: 'PORTAFOLIO', Path: '/portafolio' },
  { Id: 'contacto', Label: 'CONTACTO', Path: '/contacto' },
] as const
