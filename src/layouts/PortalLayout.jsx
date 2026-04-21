import { Outlet } from 'react-router-dom'
import PortalNavbar from '../portal/components/PortalNavbar'
import PortalFooter from '../portal/components/PortalFooter'

function PortalLayout() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <PortalNavbar />
      <main>
        <Outlet />
      </main>
      <PortalFooter />
    </div>
  )
}

export default PortalLayout