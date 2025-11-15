import React from 'react'

const Hero = () => {
  // Icon components matching the provided design
  const PixelIcon = ({ type }) => {
    const icons = {
      news: (
        <svg className="w-12 h-12 mx-auto text-minecraft-gray" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      members: (
        <svg className="w-12 h-12 mx-auto text-minecraft-gray" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      events: (
        <svg className="w-12 h-12 mx-auto text-minecraft-gray" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
        </svg>
      )
    }
    return icons[type]
  }

  const cards = [
    {
      iconType: 'news',
      title: 'Latest Clan News',
      description: 'A snippet of the most recent announcement about our latest server updates.',
    },
    {
      iconType: 'members',
      title: 'Meet Our Members',
      description: 'Check out our community page and see the amazing people in our clan.',
    },
    {
      iconType: 'events',
      title: 'Upcoming Events',
      description: 'Join us for the next build-off! Details on our events page.',
    },
  ]

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center pixelated"
          style={{ backgroundImage: "url('/Castle Photos - Download Free High-Quality Pictures _ Freepik.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Animated stars/particles in background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-6">
              <div className="inline-block p-6">
                <img src="/logo.png" alt="Castle" className="h-16 w-auto pixelated" />
              </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white minecraft-shadow leading-tight">
              Welcome to LUMINA!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white minecraft-shadow">
              Builders, Adventurers, and Friends
            </p>

            {/* Discord Button */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-minecraft-green hover:bg-green-600 text-black text-sm font-bold border-4 border-black/50 transition-all transform hover:scale-105">
                Join Our Discord
              </button>
            </div>
          </div>
        </div>

        
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-minecraft-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-minecraft-dark border-4 border-black/50 p-6"
              >
                {/* Icon - Pixel art style */}
                <div className="mb-6">
                  <PixelIcon type={card.iconType} />
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-3 minecraft-shadow">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-minecraft-gray text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
