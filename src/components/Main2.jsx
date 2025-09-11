import React from 'react';

import brochureImg from '../assets/brochure.jpg';


function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = brochu;
    anchor.download = 'broucher.pdf';
    anchor.click();
  };

  return (
    <div className=' pb-5 bg-gradient-to-br from-indigo-800 to-gray-800 pr-5 pl-5'>
      <div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:text-light mt-5 flex flex-col justify-center">
            <span className='text-info'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About ACA</h1>
            <p className='text-white text-lg lg:text-xl'>
              
              Amazon Christian Academy (ACA), founded in 2022, is dedicated to providing quality education and holistic development. The school emphasizes academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced science labs, spacious classrooms, a well-stocked library, and comprehensive sports facilities. ACA aims to empower students with knowledge and skills for a successful future.
            </p>
            <button className="bg-primary p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-light" onClick={downloadBroucher}>
              Download Brochure
            </button>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a href="#" download="broucher.pdf">
              <img src={brochureImg} className='lg:w-full rounded-lg' alt="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
