import React, { useEffect } from 'react';
import coverPage from '../assets/coverpage.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {arts, arts1, stem, athletics, biblestudy, showcase13} from '../assets';

function AboutPrograms () {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const programs = [
    {
      title: 'STEM Program',
      desc: 'Explore science, technology, engineering, and mathematics through practical projects.',
      img: stem,
    },
    {
      title: 'Arts & Humanities',
      desc: 'Creative expression through visual arts, music, theater, and literature.',
      img: arts,
    },
    {
      title: 'Athletics',
      desc: 'Competitive sports programs that build teamwork and discipline.',
      img: athletics,
    },
    {
      title: 'Bible Studies',
      desc: 'Deepen your faith through biblical studies and practical application.',
      img: biblestudy,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
    

<div className="flex flex-col md:flex-row items-center mb-20">
  <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">About Our Academy</h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-4">
      Amazon Christian Academy (ACA), founded in 2022, is a Church of Christ institution dedicated to providing quality education and holistic developmen
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Our mission is to prepare students for life both globally and eternally
    </p>
    <Link 
      to={`/aboutus`}
      className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900"
    >
      Read More About Us
      <ArrowForwardIcon className="ml-2 w-5 h-5" />
    </Link>
  </div>
  <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
    <img
      src={showcase13}
      alt="Students in classroom"
      className="w-full h-auto object-cover rounded-xl shadow-lg"
    />
  </div>
</div>



        {/* Programs Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Academic Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a challenging curriculum designed to prepare students for success in college and life.
          </p>
        </div>

    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {programs.map((program, idx) => (
    <Link
      to={`/curriculum`}
      key={program.title}
      className="group bg-blue-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      <img
        src={program.img}
        alt={program.title}
        className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
        <p className="text-gray-600">{program.desc}</p>
      </div>
    </Link>
  ))}
</div>




        {/* Explore Programs Button */}
        <div className="text-center mt-12">
          <Link
            to={`/curriculum`}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Explore All Programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPrograms;
