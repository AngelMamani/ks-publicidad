import { NavigationItems } from '@domain/constants/Navigation'
import type { NavigationItem } from '@domain/entities/NavigationItem'

export class NavigationService {
  GetItems(): readonly NavigationItem[] {
    return NavigationItems
  }
}
