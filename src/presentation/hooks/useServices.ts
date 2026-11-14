import { useEffect, useState } from 'react'
import type { Service } from '@domain/entities/Service'
import { Container } from '@infrastructure/di/Container'

export function useServices() {
  const [Services, setServices] = useState<readonly Service[]>([])
  const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let IsMounted = true

    Container.GetServices.Execute()
      .then((Items) => {
        if (IsMounted) {
          setServices(Items)
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

  return { Services, IsLoading }
}
