import type { Service } from '@domain/entities/Service'
import type { IServiceRepository } from '@domain/repositories/IServiceRepository'
import { ServicesData } from '@infrastructure/data/ServicesData'

export class ServiceRepository implements IServiceRepository {
  async GetAll(): Promise<readonly Service[]> {
    return ServicesData
  }
}
