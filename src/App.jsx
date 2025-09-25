import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { AboutPrograms, Campus, Checkout,College, Contact, Coursoul, Curriculum, Events, Faculty, Footer, Main1, Main2, Main3, Marquee, Moto, Navbar, Students, Timer} from './components/index.jsx';
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
          <Route
            exact
            path='/'
            element={
              <div>
                <Coursoul />
                <Marquee text={`"Welcome to Amazon Christian Academy, Home Of The Lions."`} />
                <Timer />
                <Marquee text={`"Join us for our Annual Speech and Accolades Day"`} />
                <AboutPrograms/>
                <Main1 />
              </div>
            }
          />

          <Route
            exact
            path='/faculty'
            element={
              <>
                <Faculty />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/students'
            element={
              <>
                <Students />
              </>
            }
          />

          <Route
            exact
            path='/campus'
            element={
              <>
                <Campus />
                <Main2 />
               
              </>
            }
          />

          <Route
            exact
            path='/events'
            element={
              <>
                <Events />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/curriculum'
            element={
              <>
                <Curriculum />
                <Main2 />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path='/aboutus'
            element={
              <>
                <College />
                 <Moto />
               
              </>
            }
          />

          <Route
            exact
            path='/contact'
            element={
              <>
                <Contact />
                
                
              </>
            }
          />

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
