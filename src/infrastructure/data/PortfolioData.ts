import type { PortfolioItem } from '@domain/entities/PortfolioItem'
import { AssetPaths } from '@infrastructure/assets/AssetPaths'

export const PortfolioData: readonly PortfolioItem[] = [
  {
    Id: 'taurus-gym',
    Title: 'Taurus Gym',
    Category: 'Letrero luminoso 3D',
    Description: 'Panel con letras LED y mascota animalista para fachada de gimnasio.',
    Image: AssetPaths.Productos.LetreroTaurusGym,
  },
  {
    Id: 'expo-amazonica',
    Title: 'Expo Amazónica',
    Category: 'Letras volumétricas',
    Description: 'Letras corpóreas de gran formato para evento ferial regional.',
    Image: AssetPaths.Productos.LetrasVolumetricasExpo,
  },
  {
    Id: 'minimarket-lis',
    Title: 'Minimarket Lis',
    Category: 'Letrero luminoso',
    Description: 'Cajón luminoso full color para carnicería y minimarket.',
    Image: AssetPaths.Productos.LetreroMinimarketLis,
  },
  {
    Id: 'neon-dino',
    Title: 'Team Dino Neon',
    Category: 'Neón LED',
    Description: 'Neón LED tipográfico y figura animalista sobre acrílico.',
    Image: AssetPaths.Productos.NeonLedPersonalizado,
  },
  {
    Id: 'giganto-alta-calidad',
    Title: 'Impresión de gran formato',
    Category: 'Gigantografía',
    Description: 'Producción de banners full color en plotter de alta resolución.',
    Image: AssetPaths.Productos.GigantografiaAltaCalidad,
  },
  {
    Id: 'bar-secreto',
    Title: 'Bar El Secreto',
    Category: 'Gigantografía',
    Description: 'Banner full color para local nocturno con impresión de gran impacto.',
    Image: AssetPaths.Productos.BannerBarElSecreto,
  },
  {
    Id: 'taller-ks',
    Title: 'Producción KS',
    Category: 'Taller',
    Description: 'Línea de producción con plotters de gran formato e identidad KS.',
    Image: AssetPaths.Productos.TallerKsProduccion,
  },
  {
    Id: 'evento-impresion',
    Title: 'Campaña de evento',
    Category: 'Impresión industrial',
    Description: 'Tiraje de banners en plotter con color saturado para activaciones.',
    Image: AssetPaths.Productos.BannerEventoImpresion,
  },
]
