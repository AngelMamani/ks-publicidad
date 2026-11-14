import { useEffect, useState } from 'react'
import type { ContactInfo, ContactMessage } from '@domain/entities/ContactInfo'
import { Container } from '@infrastructure/di/Container'

export function useContact() {
  const [Info, setInfo] = useState<ContactInfo | null>(null)
  const [IsLoading, setIsLoading] = useState(true)
  const [Status, setStatus] = useState<string | null>(null)
  const [HasError, setHasError] = useState(false)

  useEffect(() => {
    let IsMounted = true

    Container.GetContactInfo.Execute()
      .then((Contact) => {
        if (IsMounted) {
          setInfo(Contact)
        }
      })
      .finally(() => {
        if (IsMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      IsMounted = false
    }
  }, [])

  async function Submit(Message: ContactMessage) {
    setHasError(false)
    setStatus(null)

    try {
      await Container.SubmitContactMessage.Execute(Message)
      setStatus('Abrimos tu correo para enviar la solicitud a KS.')
    } catch (ErrorValue) {
      setHasError(true)
      setStatus(
        ErrorValue instanceof Error
          ? ErrorValue.message
          : 'No se pudo preparar el mensaje. Inténtalo de nuevo.',
      )
    }
  }

  return { Info, IsLoading, Status, HasError, Submit }
}
