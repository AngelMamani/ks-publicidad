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
    Id: 'caja-luminosa',
    Name: 'Cajas luminosas',
    Category: 'Iluminación',
    Description:
      'Cajas de luz circulares o rectangulares con acabado premium para discotecas y locales.',
    Specs: 'Backlit LED · Diseño a medida',
    Image: AssetPaths.Productos.CajaLuminosaDiscoBar,
  },
  {
    Id: 'letreros-boutique',
    Name: 'Letreros boutique',
    Category: 'Comercial',
    Description:
      'Señalética elegante con tipografía 3D, iconografía y barra de contacto luminosa.',
    Specs: 'Relieve + iluminación',
    Image: AssetPaths.Productos.LetreroGlowyBoutique,
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
    Id: 'letreros-luminosos',
    Name: 'Letreros luminosos full color',
    Category: 'Señalética',
    Description:
      'Piezas iluminadas con degradados, logos y presencia nocturna de alto contraste.',
    Specs: 'Backlit · Fachada / interior',
    Image: AssetPaths.Productos.LetreroLuminosoGlowy,
  },
  {
    Id: 'gigantografias',
    Name: 'Gigantografías y banners',
    Category: 'Gran formato',
    Description:
      'Lonas y banners full color para campañas, bares, eventos y publicidad exterior.',
    Specs: 'Vinilo / lona · Alta resolución',
    Image: AssetPaths.Productos.BannerBarElSecreto,
  },
  {
    Id: 'impresion-uv',
    Name: 'Impresión de gran formato',
    Category: 'Producción',
    Description:
      'Impresión industrial en plotter para tirajes publicitarios con color intenso y detalle.',
    Specs: 'Plotter profesional · Stock de materiales',
    Image: AssetPaths.Productos.ImpresionGranFormato,
  },
]
