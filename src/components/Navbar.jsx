import { useState, useEffect } from 'react'
import mylogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Menu links
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/faculty', label: 'FACULTY' },
    { href: '/students', label: 'STUDENTS' },
    { href: '/events', label: 'EVENTS' },
    { href: '/curriculum', label: 'ACADEMICS' },
    { href: '/campus', label: 'GLIMPSE' },
    { href: '/portal', label: 'PORTAL' },   
    { href: '/contact', label: 'CONTACT US', isButton: true },
  ]

  return (
    <nav className="w-[100vw] overflow-x-hidden">
      <div className="container-fluid">
        {/* Desktop Navbar */}
        <div className="row hidden lg:flex lg:items-center lg:justify-between p-3 text-white bg-gradient-to-br from-indigo-800 to-gray-800">
          <div className="col-6 d-flex items-center">
            <h5 className="fw-bold">Amazon Christian Academy</h5>
          </div>
          <div className="col-6 d-flex justify-content-end"></div>
        </div>

        {/* Brand + Navbar */}
        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light">
          <div className="container-fluid">
            <span className="navbar-brand flex items-center">
              <Link to="/">
              <img
                src={mylogo}
                alt=""
                className="navbar-brand rounded-full object-fill w-[50px] lg:w-[80px]"
              />
              </Link>
              <div className="show-above-1024">
                <span className="font-bold">Amazon Christian Academy</span>
                <span className="small text-gray-500">Filabusi, Insiza District</span>
              </div>
              <span className="lg:hidden block text-sm">Amazon Christian Academy</span>
            </span>

            <div className="flex" id="navbarNav">
              {/* Desktop Links */}
              <ul className="navbar-nav hidden lg:flex align-items-center">
                {links.map((link) =>
                  link.isButton ? (
                    <li key={link.href} className="nav-item me-3">
                      <button className="btn shadow btn-primary">
                        <Link to={link.href} className="text-light text-decoration-none">
                          {link.label}
                        </Link>
                      </button>
                    </li>
                  ) : (
                    <Link key={link.href} to={link.href} className="nav-item me-3">
                      <a className="nav-link">{link.label}</a>
                    </Link>
                  )
                )}
              </ul>

              {/* Mobile Menu Button */}
              <div className="d-lg-none d-block">
                <Menu className="fw-bold fs-1 cursor-pointer" onClick={toggleMenu} />
              </div>

              {/* Mobile Menu Overlay */}
              <div
                className={`fixed top-0 right-0 h-full p-4 w-64 transform transition-transform duration-300 ease-in-out z-50
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                bg-gray-800 bg-opacity-80`} // 👈 semi-transparent
              >
                {/* Close Button */}
                <div className="cursor-pointer text-2xl mb-4" onClick={toggleMenu}>
                  &times;
                </div>

                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href} onClick={() => setIsOpen(false)}>
                      {link.isButton ? (
                        <button className="btn bg-blue-500 text-white w-full">
                          <Link to={link.href} className="text-white">
                            {link.label}
                          </Link>
                        </button>
                      ) : (
                        <Link to={link.href} className="text-white block">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
