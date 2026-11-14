import { GetCatalog } from '@application/use-cases/GetCatalog'
import { GetContactInfo } from '@application/use-cases/GetContactInfo'
import { GetPortfolio } from '@application/use-cases/GetPortfolio'
import { GetServices } from '@application/use-cases/GetServices'
import { SubmitContactMessage } from '@application/use-cases/SubmitContactMessage'
import { NavigationService } from '@application/services/NavigationService'
import { CatalogRepository } from '@infrastructure/repositories/CatalogRepository'
import { ContactRepository } from '@infrastructure/repositories/ContactRepository'
import { PortfolioRepository } from '@infrastructure/repositories/PortfolioRepository'
import { ServiceRepository } from '@infrastructure/repositories/ServiceRepository'

const serviceRepository = new ServiceRepository()
const catalogRepository = new CatalogRepository()
const portfolioRepository = new PortfolioRepository()
const contactRepository = new ContactRepository()

export const Container = {
  NavigationService: new NavigationService(),
  GetServices: new GetServices(serviceRepository),
  GetCatalog: new GetCatalog(catalogRepository),
  GetPortfolio: new GetPortfolio(portfolioRepository),
  GetContactInfo: new GetContactInfo(contactRepository),
  SubmitContactMessage: new SubmitContactMessage(contactRepository),
} as const
