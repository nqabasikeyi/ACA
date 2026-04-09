import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { arts, stem, athletics, biblestudy, showcase13 } from '../assets';

function AboutPrograms() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      desc: 'Competitive sports programs that build teamwork, discipline, and leadership.',
      img: athletics,
    },
    {
      title: 'Bible Studies',
      desc: 'Deepen your faith through biblical studies, reflection, and practical application.',
      img: biblestudy,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              About Our Academy
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Amazon Christian Academy (ACA), founded in 2022, is a Church of Christ institution
              dedicated to providing quality education and holistic development.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our mission is to prepare students for life both globally and eternally.
            </p>

            <Link
              to="/aboutus"
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

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Our Academic Programs
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a challenging curriculum designed to prepare students for success in college and life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <Link
                to="/curriculum"
                key={program.title}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative block overflow-hidden rounded-2xl min-h-[420px] shadow-lg"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 500ms ease',
                  }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(to top, rgba(23,37,84,0.92), rgba(30,64,175,0.45), rgba(0,0,0,0.12))'
                      : 'linear-gradient(to top, rgba(0,0,0,0.86), rgba(0,0,0,0.35), rgba(0,0,0,0.05))',
                    transition: 'background 500ms ease',
                  }}
                />

                <div className="absolute inset-0 z-10 text-white">
                  <h3
                    className="absolute left-6 right-6 text-3xl font-extrabold uppercase leading-tight tracking-wide"
                    style={{
                      bottom: isHovered ? '50%' : '1.5rem',
                      transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
                      transition: 'bottom 500ms ease',
                    }}
                  >
                    {program.title}
                  </h3>

                  <div
                    className="absolute left-6 right-6 bottom-6"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(24px)',
                      transition: 'opacity 500ms ease, transform 500ms ease',
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                  >
                    <p className="text-base md:text-lg leading-relaxed text-white/90 mb-5 mt-2">
                      {program.desc}
                    </p>

                    <span className="inline-flex items-center justify-center gap-2 bg-white text-blue-950 font-bold uppercase tracking-wide px-6 py-3 min-w-[170px] shadow-md">
                      Learn More
                      <ArrowForwardIcon className="!w-5 !h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/curriculum"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Explore All Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPrograms;