import type { ContactInfo, ContactMessage } from '@domain/entities/ContactInfo'
import type { IContactRepository } from '@domain/repositories/IContactRepository'
import { ContactData } from '@infrastructure/data/ContactData'

export class ContactRepository implements IContactRepository {
  async GetInfo(): Promise<ContactInfo> {
    return ContactData
  }

  async SubmitMessage(Message: ContactMessage): Promise<void> {
    const Subject = encodeURIComponent(`Consulta KS · ${Message.Service || 'General'}`)
    const Body = encodeURIComponent(
      [
        `Nombre: ${Message.Name}`,
        `Correo: ${Message.Email}`,
        `Teléfono: ${Message.Phone || 'No indicado'}`,
        `Servicio: ${Message.Service || 'General'}`,
        '',
        Message.Message,
      ].join('\n'),
    )

    window.location.href = `mailto:${ContactData.Email}?subject=${Subject}&body=${Body}`
  }
}
