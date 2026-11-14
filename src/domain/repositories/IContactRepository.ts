import type { ContactInfo, ContactMessage } from '@domain/entities/ContactInfo'

export interface IContactRepository {
  GetInfo(): Promise<ContactInfo>
  SubmitMessage(Message: ContactMessage): Promise<void>
}