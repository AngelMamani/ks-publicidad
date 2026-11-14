import { useState, type FormEvent } from 'react'
import type { ContactMessage } from '@domain/entities/ContactInfo'
import { CtaButton } from '@presentation/components/ui/CtaButton'

interface ContactFormProps {
  readonly OnSubmit: (Message: ContactMessage) => Promise<void>
  readonly Status: string | null
  readonly HasError: boolean
}

const InitialForm: ContactMessage = {
  Name: '',
  Email: '',
  Phone: '',
  Service: 'Gigantografías',
  Message: '',
}

export function ContactForm({ OnSubmit, Status, HasError }: ContactFormProps) {
  const [Form, setForm] = useState<ContactMessage>(InitialForm)

  async function HandleSubmit(Event: FormEvent<HTMLFormElement>) {
    Event.preventDefault()
    await OnSubmit(Form)
  }

  return (
    <form className="contact-form" onSubmit={HandleSubmit}>
      <label>
        Nombre
        <input
          required
          value={Form.Name}
          onChange={(Event) => setForm({ ...Form, Name: Event.target.value })}
          placeholder="Tu nombre"
        />
      </label>
      <label>
        Correo
        <input
          required
          type="email"
          value={Form.Email}
          onChange={(Event) => setForm({ ...Form, Email: Event.target.value })}
          placeholder="tu@correo.com"
        />
      </label>
      <label>
        Teléfono
        <input
          value={Form.Phone}
          onChange={(Event) => setForm({ ...Form, Phone: Event.target.value })}
          placeholder="999 000 000"
        />
      </label>
      <label>
        Servicio
        <select
          value={Form.Service}
          onChange={(Event) => setForm({ ...Form, Service: Event.target.value })}
        >
          <option>Gigantografías</option>
          <option>Impresión UV</option>
          <option>Letras Acrílicas 3D</option>
          <option>Rotulado Vehicular</option>
          <option>Gráfica Corporativa</option>
          <option>Instalación</option>
        </select>
      </label>
      <label>
        Mensaje
        <textarea
          required
          value={Form.Message}
          onChange={(Event) => setForm({ ...Form, Message: Event.target.value })}
          placeholder="Cuéntanos medidas, material y plazo"
        />
      </label>
      <CtaButton Type="submit">Enviar solicitud</CtaButton>
      {Status ? (
        <p className={`form-status${HasError ? ' form-status--error' : ''}`}>{Status}</p>
      ) : null}
    </form>
  )
}
