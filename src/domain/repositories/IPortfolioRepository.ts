import type { PortfolioItem } from '@domain/entities/PortfolioItem'

export interface IPortfolioRepository {
  GetAll(): Promise<readonly PortfolioItem[]>
}
