import React from "react";
import {
  Lightbulb,
  Group,
  Gavel,
  Diversity3,
  Handshake,
  EmojiEvents,
} from "@mui/icons-material";

const Moto = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
            Our Foundation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            Our Vision
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            To glorify God through the training and nurturing of students in
            their spiritual, academic, physical, emotional, and social
            development. This is achieved through a Christ-centered education
            based on biblical truth, leading to the formation of Godly character,
            wisdom, knowledge, and love.
          </p>
        </div>

        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  {React.cloneElement(item.icon, {
                    className: "text-blue-600",
                    style: { fontSize: "34px" },
                  })}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                {item.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">
            Our Mission
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            At{" "}
            <span className="font-semibold text-blue-700">
              Amazon Christian Academy
            </span>
            , our mission is to prepare students for life both globally and
            eternally through quality education, Christian values, and holistic
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

const mottoItems = [
  {
    title: "Integrity",
    description:
      "We teach learners to be honest, responsible, and trustworthy in their words, actions, and decisions.",
    icon: <Lightbulb />,
  },
  {
    title: "Teamwork",
    description:
      "We encourage learners to work together, respect one another, and contribute positively to shared goals.",
    icon: <Group />,
  },
  {
    title: "Discipline",
    description:
      "We instill self-control, responsibility, time management, and respect as foundations for personal and academic growth.",
    icon: <Gavel />,
  },
  {
    title: "Empathy",
    description:
      "We cultivate kindness, compassion, and understanding so that learners value the feelings and needs of others.",
    icon: <Diversity3 />,
  },
  {
    title: "Service",
    description:
      "We prepare learners to serve others with humility, care, professionalism, and a Christ-centered attitude.",
    icon: <Handshake />,
  },
  {
    title: "Excellence",
    description:
      "We inspire learners to give their best in academics, sports, character, and personal development.",
    icon: <EmojiEvents />,
  },
];

export default Moto;