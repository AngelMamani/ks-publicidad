import type { CatalogItem } from '@domain/entities/CatalogItem'
import type { ICatalogRepository } from '@domain/repositories/ICatalogRepository'

export class GetCatalog {
  private readonly CatalogRepository: ICatalogRepository

  constructor(CatalogRepository: ICatalogRepository) {
    this.CatalogRepository = CatalogRepository
  }

  async Execute(): Promise<readonly CatalogItem[]> {
    return this.CatalogRepository.GetAll()
  }
}
