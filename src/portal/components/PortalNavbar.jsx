import { Link } from 'react-router-dom'

function PortalNavbar() {
  return (
    <div className="w-full bg-slate-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/portal/dashboard" className="text-lg font-bold text-decoration-none text-white">
          Student Portal
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/portal/dashboard" className="text-white text-decoration-none">
            Dashboard
          </Link>
          <Link to="/portal/results" className="text-white text-decoration-none">
            Results
          </Link>
          <Link to="/portal/profile" className="text-white text-decoration-none">
            Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortalNavbar