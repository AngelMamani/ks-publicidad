import type { CatalogItem } from '@domain/entities/CatalogItem'

export interface ICatalogRepository {
  GetAll(): Promise<readonly CatalogItem[]>
}
