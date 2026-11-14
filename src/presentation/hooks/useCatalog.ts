import { useEffect, useState } from 'react'
import type { CatalogItem } from '@domain/entities/CatalogItem'
import { Container } from '@infrastructure/di/Container'

export function useCatalog() {
  const [Items, setItems] = useState<readonly CatalogItem[]>([])
  const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let IsMounted = true

    Container.GetCatalog.Execute()
      .then((CatalogItems) => {
        if (IsMounted) {
          setItems(CatalogItems)
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

  return { Items, IsLoading }
}
