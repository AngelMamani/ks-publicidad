import type { PortfolioItem } from '@domain/entities/PortfolioItem'
import type { IPortfolioRepository } from '@domain/repositories/IPortfolioRepository'
import { PortfolioData } from '@infrastructure/data/PortfolioData'

export class PortfolioRepository implements IPortfolioRepository {
  async GetAll(): Promise<readonly PortfolioItem[]> {
    return PortfolioData
  }
}
