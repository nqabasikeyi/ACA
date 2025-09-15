import React, { useState } from 'react';

const eventsData = [
  {
    category: "September Events",
    events: [
      {
        title: "Math Wizard Competition",
        date: "2025-09-15",
        description: "An exciting competition where students showcase their mathematical skills through fun puzzles and challenges."
      },
      {
        title: "Art Fair",
        date: "2025-09-22",
        description: "A creative event where students display their artwork, including paintings, drawings, and crafts."
      },
      {
        title: "Physical Fitness Week",
        date: "2025-09-28",
        description: "A week dedicated to various physical activities and sports to promote health and fitness among students."
      }
    ]
  },
  {
    category: "October Events",
    events: [
      {
        title: "Zimsec Examinations",
        date: "2025-10-14",
        description: "O Level Examnations begin for all students in Form 4"
      },
      {
        title: "Spelling Bee Competition",
        date: "2024-10-15",
        description: "A quiz competition focused on computer science topics, including programming, algorithms, and tech trivia."
      },
      {
        title: "Exeat Holiday",
        date: "2025-10-28",
        description: "Form 1 to Form 3 Exeat Holiday of 3 days, coming back on 2 September 2025"
      }
    ]
  },
  {
    category: "November Events",
    events: [
      {
        title: "Science Olympiad",
        date: "2025-11-7",
        description: "An advanced competition covering physics, chemistry, and biology, aimed at encouraging scientific inquiry and excellence."
      },
      {
        title: "Internal Examinations",
        date: "2025-11-16",
        description: "Form 1 to Form 3 Internal Examinations for all subjects"
      },
      {
        title: "Math Challenge",
        date: "2025-04-21",
        description: "A challenging event featuring advanced mathematical problems and puzzles designed to test and improve students' mathematical skills."
      }
    ]
  }
];
const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Primary Events');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderEvents = () => {
    const categoryData = eventsData.find((data) => data.category === activeCategory);
    return categoryData ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.events.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-indigo-700">{event.title}</h4>
              <p className="text-gray-600 mb-3 text-sm">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No events found for this category.</p>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {eventsData.map((data, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === data.category 
                ? 'bg-indigo-700 text-white font-bold shadow-lg' 
                : 'bg-white text-indigo-700 hover:bg-indigo-100'
            }`}
            onClick={() => handleCategoryClick(data.category)}
          >
            {data.category}
          </button>
        ))}
      </div>
      {renderEvents()}
    </div>
  );
};
export default Events;
