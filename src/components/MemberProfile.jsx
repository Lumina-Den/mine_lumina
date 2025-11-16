import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { membersData } from './Members'

// Import members data and find member by ID
const getMemberData = (id) => {
  const member = membersData.find(m => m.id === id)
  
  if (!member) {
    // Return default data if member not found
    return {
      id: 'unknown',
      name: 'Unknown Member',
      imageName: 'kid.jpg',
      role: 'Member',
      bgColor: 'bg-gray-700',
      cardBg: 'bg-gray-800',
      borderColor: 'border-gray-500',
      roleColor: 'text-gray-400',
      bio: 'This member profile is currently being updated.',
      joinDate: 'Unknown',
      stats: {
        builds: 0,
        pvpWins: 0,
        hoursPlayed: 0,
        achievements: 0,
      },
    }
  }

  // Add default bio and stats to existing member data
  return {
    ...member,
    bio: `${member.name} is a skilled warrior in the Lumina Clan, specializing as a ${member.role}. Known for their dedication and strategic gameplay.`,
    stats: {
      builds: Math.floor(Math.random() * 100) + 20,
      pvpWins: Math.floor(Math.random() * 50) + 10,
      hoursPlayed: Math.floor(Math.random() * 500) + 100,
      achievements: Math.floor(Math.random() * 30) + 15,
    },
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://example.com',
    terminal: 'https://terminal.example.com',
  }
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
              <div className={`${member.bgColor} aspect-square border-4 ${member.borderColor} mb-4 flex items-center justify-center p-4 rounded-lg overflow-hidden`}>
                <img 
                  src={`/Avatar_Bounty/${member.imageName}`}
                  alt={member.name}
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    msImageRendering: 'crisp-edges'
                  }}
                  onError={(e) => {
                    e.target.src = '/Avatar_Bounty/kid.jpg'
                  }}
                />
              </div>

              {/* Role Badge */}
              <div className={`${member.borderColor.replace('border-', 'bg-')} text-black text-center py-2 px-4 font-bold text-sm mb-4 rounded`}>
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
              {/* Name and Role */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 minecraft-shadow">
                  {member.name}
                </h1>
                <p className={`text-sm font-bold ${member.roleColor}`}>
                  {member.role}
                </p>
                {member.type === 'captain' && (
                  <p className="text-yellow-400 text-sm font-bold mt-1">
                    ★ CAPTAIN ★
                  </p>
                )}
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
                  📅 {member.joinDate || 'Recent Member'}
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
