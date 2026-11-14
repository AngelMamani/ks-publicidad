import type { CatalogItem } from '@domain/entities/CatalogItem'

export const CatalogData: readonly CatalogItem[] = [
  {
    Id: 'roll-screen',
    Name: 'Roll Screen Premium',
    Category: 'Displays',
    Description: 'Estructura de aluminio con impresión full color para stands y ferias.',
    Specs: '1.0 × 2.0 m',
  },
  {
    Id: 'banner-mesh',
    Name: 'Banner Mesh Exterior',
    Category: 'Gigantografías',
    Description: 'Lona perforada resistente al viento, ideal para fachadas y vallas.',
    Specs: 'Hasta 5 × 12 m',
  },
  {
    Id: 'caja-luz',
    Name: 'Caja Luminosa',
    Category: 'Señalética',
    Description: 'Caja de luz con impresión backlit y marco metálico de alta precisión.',
    Specs: 'Medidas a medida',
  },
  {
    Id: 'letras-3d',
    Name: 'Letras 3D Iluminadas',
    Category: 'Acrílico',
    Description: 'Letras corpóreas con iluminación LED frontal o trasera.',
    Specs: 'Espesor 3–10 cm',
  },
  {
    Id: 'vinilo',
    Name: 'Vinilo Adhesivo',
    Category: 'Rotulado',
    Description: 'Impresión y corte para vitrinas, paredes y flotas vehiculares.',
    Specs: 'Brillo / Mate',
  },
  {
    Id: 'backing',
    Name: 'Backing Corporativo',
    Category: 'Eventos',
    Description: 'Fondo publicitario modular para prensa, lanzamientos y activaciones.',
    Specs: '3 × 2.3 m',
  },
]
