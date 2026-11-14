import { useEffect, useState } from 'react'
import type { PortfolioItem } from '@domain/entities/PortfolioItem'
import { Container } from '@infrastructure/di/Container'

export function usePortfolio() {
  const [Items, setItems] = useState<readonly PortfolioItem[]>([])
  const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let IsMounted = true

    Container.GetPortfolio.Execute()
      .then((PortfolioItems) => {
        if (IsMounted) {
          setItems(PortfolioItems)
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
