import type { PortfolioItem } from '@domain/entities/PortfolioItem'
import type { IPortfolioRepository } from '@domain/repositories/IPortfolioRepository'

export class GetPortfolio {
  private readonly PortfolioRepository: IPortfolioRepository

  constructor(PortfolioRepository: IPortfolioRepository) {
    this.PortfolioRepository = PortfolioRepository
  }

  async Execute(): Promise<readonly PortfolioItem[]> {
    return this.PortfolioRepository.GetAll()
  }
}
