import type { CatalogItem } from '@domain/entities/CatalogItem'
import type { ICatalogRepository } from '@domain/repositories/ICatalogRepository'
import { CatalogData } from '@infrastructure/data/CatalogData'

export class CatalogRepository implements ICatalogRepository {
  async GetAll(): Promise<readonly CatalogItem[]> {
    return CatalogData
  }
}
