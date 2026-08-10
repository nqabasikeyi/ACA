import React from "react";

import zimsecLogo from "../assets/zimsec_logo.png";
import educationLogo from "../assets/higher_education_logo.png";

const Curriculum = () => {
  const curriculumAreas = [
    {
      title: "Arts",
      description:
        "Building strong foundations in languages, humanities, culture, and social understanding.",
      subjects: [
        "English Language",
        "Literature in English",
        "Ndebele Language",
        "Heritage Studies",
        "Family and Religious Studies",
        "History",
      ],
      color: "bg-green-500",
      bulletColor: "bg-green-500",
    },

    {
      title: "Commercials",
      description:
        "Developing mathematical, financial, entrepreneurial, and business skills.",
      subjects: [
        "Mathematics",
        "Principles of Accounts",
        "Business Enterprise and Skills",
      ],
      color: "bg-blue-500",
      bulletColor: "bg-blue-500",
    },

    {
      title: "Sciences",
      description:
        "Encouraging scientific inquiry, practical learning, innovation, and problem-solving.",
      streams: [
        {
          name: "Pure Sciences",
          subjects: [
            "Physics",
            "Chemistry",
            "Biology",
            "Agriculture",
            "Geography",
          ],
        },
        {
          name: "Other Sciences",
          subjects: [
            "Technical Drawing",
            "Computer Science",
            "Combined Science",
          ],
        },
      ],
      color: "bg-purple-500",
      bulletColor: "bg-purple-500",
    },
  ];

  const learningApproach = [
    {
      title: "Teaching Methodologies",
      description:
        "We combine established teaching methods with modern, learner-centred approaches to support different learning styles and academic abilities.",
      icon: "📚",
    },

    {
      title: "Educational Resources",
      description:
        "Learners benefit from digital classrooms, practical learning resources, computer facilities, and access to online educational platforms.",
      icon: "💻",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* PAGE HEADER */}
        <section className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
            Academic Programme
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Our Curriculum
          </h1>

          <p className="text-gray-600 text-base lg:text-lg mt-5 leading-relaxed">
            Amazon Christian Academy provides a broad and balanced curriculum
            designed to develop academic excellence, practical skills,
            creativity, discipline, and lifelong learning.
          </p>
        </section>

        {/* ZIMSEC / EDUCATION AUTHORITIES */}
        <section className="mb-14">
          <div
            className="
              max-w-3xl
              mx-auto
              bg-white
              border
              border-gray-100
              shadow-md
              rounded-2xl
              px-6
              py-6
              md:px-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-7
              sm:gap-10
            "
          >
            {/* ZIMSEC */}
            <div className="flex items-center gap-4">
              <div
                className="
                  w-16
                  h-16
                  md:w-20
                  md:h-20
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <img
                  src={zimsecLogo}
                  alt="ZIMSEC Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  National Examinations
                </p>

                <h3 className="text-lg font-bold text-gray-800">
                  ZIMSEC
                </h3>

                <p className="text-sm text-gray-500">
                  Zimbabwe School Examinations Council
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden sm:block h-16 w-px bg-gray-200"></div>

            <div className="sm:hidden w-32 h-px bg-gray-200"></div>

            {/* EDUCATION AUTHORITY */}
            <div className="flex items-center gap-4">
              <div
                className="
                  w-16
                  h-16
                  md:w-20
                  md:h-20
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <img
                  src={educationLogo}
                  alt="Ministry of Education Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Education Framework
                </p>

                <h3 className="text-lg font-bold text-gray-800">
                  Ministry of Education
                </h3>

                <p className="text-sm text-gray-500">
                  National education standards and curriculum
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM AREAS */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {curriculumAreas.map((area, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:-translate-y-1
                  border
                  border-gray-100
                "
              >
                {/* CARD HEADER */}
                <div className={`${area.color} py-5 px-6`}>
                  <h3 className="text-2xl font-bold text-white">
                    {area.title}
                  </h3>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {area.subjects ? (
                    <ul className="space-y-3">
                      {area.subjects.map((subject, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <span
                            className={`
                              w-2
                              h-2
                              ${area.bulletColor}
                              rounded-full
                              mr-3
                              shrink-0
                            `}
                          ></span>

                          {subject}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-6">
                      {area.streams.map((stream, streamIdx) => (
                        <div key={streamIdx}>
                          <h4 className="text-lg font-semibold mb-3 text-purple-700">
                            {stream.name}
                          </h4>

                          <ul className="space-y-3">
                            {stream.subjects.map((subject, subIdx) => (
                              <li
                                key={subIdx}
                                className="flex items-center text-gray-700"
                              >
                                <span
                                  className="
                                    w-2
                                    h-2
                                    bg-purple-500
                                    rounded-full
                                    mr-3
                                    shrink-0
                                  "
                                ></span>

                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING APPROACH */}
        <section className="mt-16">
          <div className="text-center mb-9">
            <span className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
              Learning at ACA
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Supporting Every Learner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {learningApproach.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-7
                  lg:p-8
                  border
                  border-gray-100
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center mb-4">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                      mr-4
                      shrink-0
                    "
                  >
                    <span className="text-3xl">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-blue-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Curriculum;