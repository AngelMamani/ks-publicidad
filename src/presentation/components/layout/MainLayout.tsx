import { Outlet } from 'react-router-dom'
import { Footer } from '@presentation/components/layout/Footer'
import { Header } from '@presentation/components/layout/Header'

export function MainLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
