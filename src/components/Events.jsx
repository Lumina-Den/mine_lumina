import React, { useState } from 'react'

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Battles', 'Tournaments', 'Building']
  
  const events = [
    {
      title: 'WEEKLY PVP TOURNAMENT',
      date: 'Saturday, 18:00 UTC',
      description: 'Hone your skills in our weekly player-vs-player tournament. Standard gear provided.',
      buttonText: 'Register Now',
      category: 'Tournaments',
      image: '⚔️',
    },
    {
      title: 'CASTLE SIEGE EVENT',
      date: 'Next Friday, 20:00 UTC',
      description: "Join forces to defend our clan's castle or lead the charge to conquer it.",
      buttonText: 'Sign Up',
      category: 'Battles',
      image: '🏰',
    },
    {
      title: 'CREATIVE BUILD CONTEST',
      date: 'Sunday, 12:00 UTC',
      description: "Showcase your architectural genius. Theme: 'Floating Islands'.",
      buttonText: 'Learn More',
      category: 'Building',
      image: '🏗️',
    },
    {
      title: 'THE END DRAGON RAID',
      date: 'Oct 31, 21:00 UTC',
      description: 'A coordinated clan effort to defeat the Ender Dragon. High-tier loot awaits!',
      buttonText: 'Join Raid Party',
      category: 'Battles',
      image: '🐉',
    },
  ]

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  return (
    <section className="min-h-screen py-20 bg-minecraft-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 minecraft-shadow">
            Upcoming Clan Events
          </h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-xs font-bold border-2 border-black/50 transition-all ${
                  activeFilter === filter
                    ? 'bg-minecraft-green text-black'
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-minecraft-dark border-4 border-amber-700 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="w-full sm:w-32 h-32 sm:h-auto bg-gray-600 flex items-center justify-center text-6xl border-b-4 sm:border-b-0 sm:border-r-4 border-amber-700">
                  {event.image}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 bg-amber-800">
                  <h3 className="text-lg font-bold text-white mb-2 minecraft-shadow">
                    {event.title}
                  </h3>
                  <p className="text-xs text-minecraft-gray mb-3 flex items-center">
                    <span className="mr-2">📅</span>
                    {event.date}
                  </p>
                  <p className="text-xs text-white mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="px-4 py-2 bg-minecraft-green hover:bg-green-600 text-black text-xs font-bold border-2 border-black/50 transition-all transform hover:scale-105">
                    {event.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-minecraft-gray text-lg">
              No events found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
