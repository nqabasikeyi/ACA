import { aca_values_banner } from "../assets/index";

function SchoolValuesBanner() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
            Our Culture
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            What Amazon Christian Academy Stands For
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are committed to building learners who grow in kindness,
            discipline, Christian faith, academic excellence, and positive conduct.
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <img
            src={aca_values_banner}
            alt="Amazon Christian Academy values banner showing what the school is not about and what the school is about"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default SchoolValuesBanner;