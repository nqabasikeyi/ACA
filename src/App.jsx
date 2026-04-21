import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material'

import Preloader from './components/Preloader'
import PublicLayout from './layouts/PublicLayout'
import PortalLayout from './layouts/PortalLayout'

import {Home, AboutPage, FacultyPage, StudentsPage, CampusPage, EventsPage, CurriculumPage, ContactPage, PortalLandingPage} from './pages/index'

import PortalLogin from './portal/pages/PortalLogin'
import StudentDashboard from './portal/pages/StudentDashboard'
import Results from './portal/pages/Results'
import Profile from './portal/pages/Profile'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 1200)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <Router>
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portal" element={<PortalLandingPage />} />
        </Route>

        {/* PORTAL */}
        <Route element={<PortalLayout />}>
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/dashboard" element={<StudentDashboard />} />
          <Route path="/portal/results" element={<Results />} />
          <Route path="/portal/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App