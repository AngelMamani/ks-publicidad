import type { Service } from '@domain/entities/Service'
import type { IServiceRepository } from '@domain/repositories/IServiceRepository'

export class GetServices {
  private readonly ServiceRepository: IServiceRepository

  constructor(ServiceRepository: IServiceRepository) {
    this.ServiceRepository = ServiceRepository
  }

  async Execute(): Promise<readonly Service[]> {
    return this.ServiceRepository.GetAll()
  }
}
