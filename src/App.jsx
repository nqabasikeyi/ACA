import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';
import {
  About,
  AboutPrograms,
  Campus,
  Checkout,
  Contact,
  Coursoul,
  Curriculum,
  Events,
  Faculty,
  Footer,
  Main1,
  Main2,
  Main3,
  Marquee,
  Moto,
  Navbar,
  Students,
  Timer
} from './components/index.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  return (
    <Router>
      <div className='bg-gray-100'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Homepage */}
          <Route
            exact
            path='/'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Home</title>
                  <meta name="description" content="Welcome to Amazon Christian Academy. Home of the Lions. Join us for our 5 year anniversary celebration." />
                </Helmet>

                <Coursoul />
                <Marquee text={`"Welcome to Amazon Christian Academy, Home Of The Lions."`} />
                <Timer />
                <Marquee text={`"Join us in celebrating our 5 year anniversary!"`} />
                <AboutPrograms />
                <Main1 />
              </>
            }
          />

          {/* Faculty */}
          <Route
            exact
            path='/faculty'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Faculty</title>
                  <meta name="description" content="Meet our dedicated faculty at Amazon Christian Academy. Our educators are committed to holistic development and academic excellence." />
                </Helmet>

                <Faculty />
                <Main2 />
                
                
              </>
            }
          />

          {/* Students */}
          <Route
            exact
            path='/students'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Students</title>
                  <meta name="description" content="Explore resources and updates for students at Amazon Christian Academy. Empowering learners for life." />
                </Helmet>

                <Students />
              </>
            }
          />

          {/* Campus */}
          <Route
            exact
            path='/campus'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Campus</title>
                  <meta name="description" content="Discover our beautiful campus and facilities that provide a conducive environment for learning and growth." />
                </Helmet>

                <Campus />
                <Main3 />
              </>
            }
          />

          {/* Events */}
          <Route
            exact
            path='/events'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Events</title>
                  <meta name="description" content="Stay updated with the latest events, programs, and activities happening at Amazon Christian Academy." />
                </Helmet>

                <Events />
                
                
              </>
            }
          />

          {/* Curriculum */}
          <Route
            exact
            path='/curriculum'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Curriculum</title>
                  <meta name="description" content="Learn about the academic curriculum at Amazon Christian Academy, designed to inspire excellence and character formation." />
                </Helmet>

                <Curriculum />
                <Main2 />
              </>
            }
          />

          {/* About */}
          <Route
            exact
            path='/about'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | About Us</title>
                  <meta name="description" content="Discover Amazon Christian Academy's vision, mission, and values. Committed to holistic Christian education." />
                </Helmet>

                <About />
                <Moto />
              </>
            }
          />

          {/* Contact */}
          <Route
            exact
            path='/contact'
            element={
              <>
                <Helmet>
                  <title>Amazon Christian Academy | Contact</title>
                  <meta name="description" content="Get in touch with Amazon Christian Academy. Reach out for inquiries, admissions, and more." />
                </Helmet>

                <Contact />
              </>
            }
          />

          {/* Fallback */}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUp />
          </button>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
