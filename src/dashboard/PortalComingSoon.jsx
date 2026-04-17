import React from "react";
import { Link } from "react-router-dom";
import lion_preload from "../assets/lion.png";

const PortalComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-red-600 px-4 py-8 sm:px-6 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Section */}
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500  text-white flex flex-col justify-center">
            <div className="flex justify-center md:justify-start mb-6 ">
                <img src={lion_preload} alt="🦁" className="preloader__logo w-full h-full object-contain p-3 text-4xl sm:text-5xl" />
            
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left leading-tight">
              Student Portal
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100 text-center md:text-left">
              Amazon Christian Academy
            </p>

            <p className="mt-6 text-sm sm:text-base leading-7 text-blue-50 text-center md:text-left">
              A simple portal for students and parents to access academic information,
              student details, and end of term performance.
            </p>

            <div className="mt-8 hidden md:block">
              <p className="text-sm text-blue-200">
                Preparing Students for Life Both Globally and Eternally
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14">
            <div className="inline-block rounded-full bg-blue-100 text-red-800 text-xs sm:text-sm font-semibold px-4 py-2 mb-5">
              Portal Update
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-7 mb-6">
              We are currently building the Amazon Christian Academy student portal.
              It will be designed to make it easier for students and parents to view
              important school information in one place.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50">
                <span className="text-xl">📘</span>
                <p className="text-sm sm:text-base text-gray-700">
                  View end of term results for all 3 terms
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50">
                <span className="text-xl">👤</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Access student details, house, club, and major sport
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50">
                <span className="text-xl">📈</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Track progress from term to term and year to year
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto text-center bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
              >
                Back to Home
              </Link>

              <button
                disabled
                className="w-full sm:w-auto bg-gray-200 text-gray-500 font-semibold px-6 py-3 rounded-xl cursor-not-allowed"
              >
                Portal Not Live Yet
              </button>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              Parents and students will be notified once the portal is available.
            </p>

            <div className="mt-8 md:hidden">
              <p className="text-center text-xs sm:text-sm text-gray-500">
                Preparing Students for Life Both Globally and Eternally
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalComingSoon;
