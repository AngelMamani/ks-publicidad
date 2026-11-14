import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@presentation/components/layout/MainLayout'
import { AboutPage } from '@presentation/pages/AboutPage'
import { CatalogPage } from '@presentation/pages/CatalogPage'
import { ContactPage } from '@presentation/pages/ContactPage'
import { HomePage } from '@presentation/pages/HomePage'
import { PortfolioPage } from '@presentation/pages/PortfolioPage'
import { ServicesPage } from '@presentation/pages/ServicesPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="catalogo" element={<CatalogPage />} />
          <Route path="portafolio" element={<PortfolioPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
