import type { ContactMessage } from '@domain/entities/ContactInfo'
import type { IContactRepository } from '@domain/repositories/IContactRepository'

export class SubmitContactMessage {
  private readonly ContactRepository: IContactRepository

  constructor(ContactRepository: IContactRepository) {
    this.ContactRepository = ContactRepository
  }

  async Execute(Message: ContactMessage): Promise<void> {
    if (!Message.Name.trim() || !Message.Message.trim()) {
      throw new Error('Completa nombre y mensaje para enviar tu solicitud.')
    }

    await this.ContactRepository.SubmitMessage(Message)
  }
}
