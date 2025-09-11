import React from 'react'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
function Coursoul() {
  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: `url(${carousel1})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Amazon Christian Academy</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>We Strive to Prepare our Learner for Life Both Globally and Eternally.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${carousel2})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center '>
              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>CHRISTIAN VALUES</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>We aim on giving our learners a strong Christian background</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${carousel3})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>POTRAZ LETTER WRITING COMPETITION</span>
                
                </h1>
                <h4 className='lg:text-xl text-sm  text-light  mt-3 font-bold'>Awarded Best School in MatSouth Letter Writing Competition in 2024 and 2025</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        
      </button>
    </div>

  )
}

export default Coursoul
