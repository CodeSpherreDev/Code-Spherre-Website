import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          About Code Spherre
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Code Spherre is more than just a community - it's a movement of passionate developers
              and innovators working together to shape the future of technology.
            </p>
            <p className="text-gray-300 text-lg">
              Our mission is to create an inclusive space where developers of all skill levels can
              learn, collaborate, and grow together through shared knowledge and experiences.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Collaborative coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}