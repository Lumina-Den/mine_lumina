import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Import members data
const getMemberData = (id) => {
  const members = [
    {
      id: 'notch',
      name: 'Notch',
      username: 'Notch',
      role: 'Leader',
      bgColor: 'bg-sky-300',
      bio: 'Founder and visionary leader of the clan. Expert in all aspects of Minecraft gameplay.',
      joinDate: 'January 2020',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      portfolio: 'https://example.com',
      terminal: 'https://terminal.example.com',
      stats: {
        builds: 127,
        pvpWins: 89,
        hoursPlayed: 1250,
        achievements: 45,
      },
    },
    // Add more members here with same structure
  ]
  
  return members.find(m => m.id === id) || members[0]
}

const MemberProfile = () => {
  const { id } = useParams()
  const member = getMemberData(id)

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: member.linkedin },
    { name: 'GitHub', icon: '💻', url: member.github },
    { name: 'Portfolio', icon: '🌐', url: member.portfolio },
    { name: 'Terminal', icon: '⌨️', url: member.terminal },
  ]

  return (
    <section className="min-h-screen py-20 bg-minecraft-darker">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/members"
          className="inline-flex items-center text-minecraft-green hover:text-green-400 mb-6 text-sm"
        >
          <span className="mr-2">←</span> Back to Members
        </Link>

        {/* Profile Container */}
        <div className="bg-minecraft-dark border-4 border-black/50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8">
            {/* Left Column - Avatar and Basic Info */}
            <div className="md:col-span-1">
              {/* Avatar */}
              <div className={`${member.bgColor} aspect-square border-4 border-minecraft-green mb-4 flex items-center justify-center p-4`}>
                <img 
                  src={`https://minotar.net/body/${member.username}/200.png`}
                  alt={member.name}
                  className="w-full h-full object-contain pixelated"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Role Badge */}
              <div className="bg-minecraft-green text-black text-center py-2 px-4 font-bold text-sm mb-4">
                {member.role}
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-black/30 hover:bg-black/50 p-3 border-2 border-black/50 transition-all"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-white text-sm font-bold">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Name and Username */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 minecraft-shadow">
                  {member.name}
                </h1>
                <p className="text-minecraft-gray text-sm">
                  @{member.username}
                </p>
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-xl font-bold text-minecraft-green mb-2 minecraft-shadow">
                  About
                </h2>
                <p className="text-minecraft-gray text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Join Date */}
              <div>
                <h2 className="text-xl font-bold text-minecraft-green mb-2 minecraft-shadow">
                  Member Since
                </h2>
                <p className="text-white text-sm">
                  📅 {member.joinDate}
                </p>
              </div>

              {/* Stats */}
              <div>
                <h2 className="text-xl font-bold text-minecraft-green mb-3 minecraft-shadow">
                  Statistics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 border-2 border-black/50">
                    <div className="text-2xl font-bold text-minecraft-green">
                      {member.stats?.builds || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs">Builds</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-black/50">
                    <div className="text-2xl font-bold text-minecraft-green">
                      {member.stats?.pvpWins || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs">PvP Wins</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-black/50">
                    <div className="text-2xl font-bold text-minecraft-green">
                      {member.stats?.hoursPlayed || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs">Hours Played</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-black/50">
                    <div className="text-2xl font-bold text-minecraft-green">
                      {member.stats?.achievements || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs">Achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberProfile
