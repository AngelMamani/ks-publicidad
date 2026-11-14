import type { ContactInfo } from '@domain/entities/ContactInfo'
import type { IContactRepository } from '@domain/repositories/IContactRepository'

export class GetContactInfo {
  private readonly ContactRepository: IContactRepository

  constructor(ContactRepository: IContactRepository) {
    this.ContactRepository = ContactRepository
  }

  async Execute(): Promise<ContactInfo> {
    return this.ContactRepository.GetInfo()
  }
}
