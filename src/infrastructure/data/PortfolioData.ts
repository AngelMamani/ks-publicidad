import type { PortfolioItem } from '@domain/entities/PortfolioItem'

export const PortfolioData: readonly PortfolioItem[] = [
  {
    Id: 'fachada',
    Title: 'Fachada Comercial KS',
    Category: 'Arquitectura comercial',
    Description: 'Identidad luminosa con letras, logos y acabado neón de alto contraste.',
  },
  {
    Id: 'flotilla',
    Title: 'Flotilla Corporativa',
    Category: 'Rotulado',
    Description: 'Aplicación integral de marca en vehículos de distribución y servicio.',
  },
  {
    Id: 'stand',
    Title: 'Stand Ferial',
    Category: 'Eventos',
    Description: 'Diseño e impresión de backings, displays y piezas volumétricas.',
  },
  {
    Id: 'uv-rigid',
    Title: 'Señalética UV Rígida',
    Category: 'Impresión UV',
    Description: 'Piezas sobre acrílico, PVC y alucobond con detalle fotográfico.',
  },
  {
    Id: 'lona',
    Title: 'Campaña Exterior',
    Category: 'Gigantografías',
    Description: 'Lonas de gran formato con instalación y transporte incluidos.',
  },
  {
    Id: 'interior',
    Title: 'Branding Interior',
    Category: 'Gráfica corporativa',
    Description: 'Ambientación de locales con vinilos, paneles y letras 3D.',
  },
]
