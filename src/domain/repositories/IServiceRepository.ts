import type { Service } from '@domain/entities/Service'

export interface IServiceRepository {
  GetAll(): Promise<readonly Service[]>
}
