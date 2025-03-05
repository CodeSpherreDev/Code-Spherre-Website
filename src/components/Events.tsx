import React from 'react';
import { Calendar } from 'lucide-react';
import { events } from '../data/events';

export function Events() {
  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Upcoming Events
        </h2>
        <div className="grid gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-gray-800 rounded-xl p-6 transition-all duration-300 ${
                event.isHighlighted
                  ? 'border border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'hover:shadow-lg hover:shadow-blue-500/20'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-blue-400 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-gray-400">{event.description}</p>
                </div>
                <a
                  href={event.registerLink} // Use the registerLink for the event
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Security improvement for target="_blank"
                >
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Register
                  </button>
                </a> {/* Closing the anchor tag */}
              </div>
            </div>
          ))} {/* Corrected closing bracket for map */}
        </div>
      </div>
    </section>
  );
}
