import type { Service } from '@domain/entities/Service'

export const ServicesData: readonly Service[] = [
  {
    Id: 'uv',
    Title: 'Impresión Digital UV',
    Description:
      'Tintas UV de alta resistencia para interiores y exteriores, con color intenso y acabado profesional.',
    Highlight: 'Durabilidad extrema',
  },
  {
    Id: 'giganto',
    Title: 'Gigantografías',
    Description:
      'Banners, lonas y paneles de gran formato para campañas, fachadas y activaciones de alto impacto.',
    Highlight: 'Gran formato',
  },
  {
    Id: 'acrilico',
    Title: 'Letras Acrílicas 3D',
    Description:
      'Señalética volumétrica con presencia corporativa para locales, oficinas y puntos de venta.',
    Highlight: 'Volumen y luz',
  },
  {
    Id: 'rotulado',
    Title: 'Rotulado Vehicular',
    Description:
      'Gráfica integral para flotas y vehículos comerciales con materiales de alta adherencia.',
    Highlight: 'Movilidad publicitaria',
  },
  {
    Id: 'corporativa',
    Title: 'Gráfica Corporativa',
    Description:
      'Backings, displays y piezas de marca para ferias, stands y arquitectura comercial.',
    Highlight: 'Identidad de marca',
  },
  {
    Id: 'instalacion',
    Title: 'Instalación y Transporte',
    Description:
      'Producción, logística y montaje profesional para que tu campaña llegue lista a exhibir.',
    Highlight: 'Servicio integral',
  },
]
