import type { ContactInfo, ContactMessage } from '@domain/entities/ContactInfo'
import type { IContactRepository } from '@domain/repositories/IContactRepository'
import { ContactData } from '@infrastructure/data/ContactData'

export class ContactRepository implements IContactRepository {
  async GetInfo(): Promise<ContactInfo> {
    return ContactData
  }

  async SubmitMessage(Message: ContactMessage): Promise<void> {
    const Text = [
      `Hola KS, soy ${Message.Name}.`,
      `Teléfono: ${Message.Phone || 'No indicado'}`,
      `Servicio: ${Message.Service || 'General'}`,
      '',
      Message.Message,
    ].join('\n')

    window.open(
      `https://wa.me/${ContactData.WhatsApp}?text=${encodeURIComponent(Text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }
}
