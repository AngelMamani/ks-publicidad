import type { CatalogItem } from '@domain/entities/CatalogItem'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'

export const CatalogData: readonly CatalogItem[] = [
  {
    Id: 'letreros-3d',
    Name: 'Letreros luminosos 3D',
    Category: 'Señalética',
    Description:
      'Paneles con letras corpóreas iluminadas para gimnasios, locales y marcas de alto impacto.',
    Specs: 'LED interior · Medidas a medida',
    Image: AssetPaths.Productos.LetreroTaurusGym,
  },
  {
    Id: 'letras-volumetricas',
    Name: 'Letras volumétricas',
    Category: 'Acrílico / PVC',
    Description:
      'Letras corpóreas de gran tamaño para eventos, ferias y ambientaciones comerciales.',
    Specs: 'Piso o muro · Colores personalizados',
    Image: AssetPaths.Productos.LetrasVolumetricasExpo,
  },
  {
    Id: 'letreros-luminosos',
    Name: 'Letreros luminosos',
    Category: 'Iluminación',
    Description:
      'Cajones luminosos full color para minimarkets, locales y fachadas con iluminación LED.',
    Specs: 'Backlit LED · Diseño a medida',
    Image: AssetPaths.Productos.LetreroMinimarketLis,
  },
  {
    Id: 'neon-led',
    Name: 'Neón LED personalizado',
    Category: 'Neón',
    Description:
      'Figuras y tipografías en neón LED flexible sobre acrílico, ideal para interiores.',
    Specs: 'Bajo consumo · Colores vivos',
    Image: AssetPaths.Productos.NeonLedPersonalizado,
  },
  {
    Id: 'gigantografias',
    Name: 'Gigantografías y banners',
    Category: 'Gran formato',
    Description:
      'Lonas y banners full color para campañas, bares, eventos y publicidad exterior.',
    Specs: 'Vinilo / lona · Alta resolución',
    Image: AssetPaths.Productos.GigantografiaAltaCalidad,
  },
  {
    Id: 'impresion-alta-calidad',
    Name: 'Impresión de alta calidad',
    Category: 'Producción',
    Description:
      'Impresión industrial en plotter para tirajes publicitarios con color intenso y detalle.',
    Specs: 'Plotter profesional · Stock de materiales',
    Image: AssetPaths.Productos.ImpresionGranFormato,
  },
]
