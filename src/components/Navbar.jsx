import { useState, useEffect, useRef } from 'react'
import mylogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Close } from '@mui/icons-material'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDesktopNav, setShowDesktopNav] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsOpen(false)

      if (currentScrollY <= 10) {
        setIsAtTop(true)
        setShowDesktopNav(true)
      } else {
        setIsAtTop(false)

        if (currentScrollY > lastScrollY.current) {
          setShowDesktopNav(false)
        } else {
          setShowDesktopNav(true)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <nav className="w-full overflow-x-hidden">
      <div className="container-fluid p-0">
        {/* DESKTOP NAVBAR ONLY */}
        <div className="hidden lg:block">
          <div
            className={`
              fixed top-0 left-0 right-0 z-[120]
              transition-all duration-500 ease-in-out
              ${
                showDesktopNav
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-full opacity-0 pointer-events-none'
              }
            `}
          >
            <div
              className={`
                relative transition-all duration-500
                ${
                  isAtTop
                   ? 'bg-white border-b border-gray-200'
  : `
    bg-black/40 backdrop-blur-xl border-b border-white/20
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  `
                }
              `}
            >
              {!isAtTop && (
                <>
                  <>
  {/* glass shine */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

  {/* top highlight line */}
  <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-white/30"></div>

  {/* subtle inner glow */}
  <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>
</>
                  <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-white/20"></div>
                </>
              )}

              <div className="container-fluid relative z-10">
                <div className="flex items-center justify-between h-[82px] px-4 xl:px-6">
                  {/* Left side */}
                  <Link to="/" className="flex items-center gap-3 text-decoration-none shrink-0">
                    <img
                      src={mylogo}
                      alt="Amazon Christian Academy Logo"
                      className="w-[58px] h-[58px] object-contain"
                    />

                    <div className="flex flex-col leading-tight">
                      <span
                        className={`text-[18px] font-bold ${
                          isAtTop ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        Amazon Christian Academy
                      </span>
                      <span
                        className={`text-[13px] ${
                          isAtTop ? 'text-gray-500' : 'text-white/70'
                        }`}
                      >
                        Filabusi, Insiza District
                      </span>
                    </div>
                  </Link>

                  {/* Right side */}
                  <div id="navbarNav" className="ml-6 flex-1">
                    <ul className="mb-0 flex items-center justify-end gap-1 xl:gap-2 list-none">
                      {links.map((link) =>
                        link.isButton ? (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              className={`
                                inline-flex items-center justify-center
                                h-[42px] px-4 xl:px-5
                                rounded-xl text-[13px] xl:text-[14px] font-semibold
                                text-decoration-none transition-all duration-300
                                ${
                                  isAtTop
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-white text-black hover:bg-white/90'
                                }
                              `}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ) : (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              className={`
                                inline-flex items-center justify-center
                                h-[42px] px-3 xl:px-4
                                rounded-xl text-[13px] xl:text-[14px] font-medium
                                text-decoration-none transition-all duration-300
                                ${
                                  isAtTop
                                    ? 'text-gray-800 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                                }
                              `}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for fixed desktop nav */}
          <div className="h-[82px]"></div>
        </div>

        {/* MOBILE NAVBAR ONLY */}
        <div className="lg:hidden">
          <div className="h-[86px]"></div>

          <div className="fixed top-0 left-0 w-full z-[100] px-3 pt-3">
            <div
              className="
                relative flex items-center justify-between
                rounded-2xl px-4 py-3
                bg-black/40
                backdrop-blur-xl
                border border-white/20
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                overflow-hidden
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
              <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-white/30"></div>

              <Link
                to="/"
                className="relative z-10 flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={mylogo}
                  alt="Amazon Christian Academy Logo"
                  className="w-[46px] h-[46px] object-cover"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-semibold text-sm">Amazon Christian Academy</span>
                  <span className="text-white/70 text-[11px]">Filabusi, Insiza District</span>
                </div>
              </Link>

              <button
                onClick={toggleMenu}
                className="
                  relative z-10 flex items-center justify-center
                  w-12 h-12 rounded-xl
                  bg-white/10
                  border border-white/20
                  text-white
                  backdrop-blur-md
                  transition duration-300
                  hover:bg-white/20
                "
                aria-label="Toggle menu"
              >
                {isOpen ? <Close className="text-3xl" /> : <Menu className="text-3xl" />}
              </button>
            </div>
          </div>

          <div
            className={`
              fixed top-0 left-0 w-full h-screen z-[90]
              transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-[#050816]/95 via-[#0b1023]/95 to-[#2d0b18]/95
                backdrop-blur-2xl
              "
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="relative h-full pt-[110px] px-6 pb-8 overflow-y-auto">
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href} onClick={() => setIsOpen(false)}>
                    {link.isButton ? (
                      <Link
                        to={link.href}
                        className="
                          block w-full text-center
                          mt-4 py-4 rounded-2xl
                          bg-white text-black font-semibold
                          shadow-lg text-base tracking-wide
                        "
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        to={link.href}
                        className="
                          block w-full
                          text-white text-[15px] font-medium
                          px-4 py-4 rounded-2xl
                          border border-white/10
                          bg-white/5
                          backdrop-blur-md
                          hover:bg-white/10
                          transition
                        "
                      >
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
    </nav>
  )
}

export default Navbar