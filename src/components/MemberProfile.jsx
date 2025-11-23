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

  // Specific data for Vishal
  if (id === 'vishal') {
    return {
      ...member,
      bio: 'Vishal is an aspiring data engineer with a passionate interest in the world of AI and ML. As Lead Performer of the Lumina Crew, he combines technical expertise with strategic leadership, sailing through the digital seas of data and discovery.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 87,
        pvpWins: 42,
        hoursPlayed: 350,
        achievements: 28,
      },
      linkedin: 'https://www.linkedin.com/in/vishaln24/',
      github: 'https://github.com/Vishal-46',
      portfolio: 'https://vishal-46.github.io/Vishal-Portfolio/',
      terminal: 'https://terminal.bytebashblitz.org/profile/Vishal-46',
    }
  }

  // Specific data for Tony
  if (id === 'tony') {
    return {
      ...member,
      bio: 'Tony is a skilled web developer and cloud computing enthusiast. As the "Pirate Hunter" of the Lumina Crew, he masters full-stack development with React and Supabase, creating innovative digital platforms and fitness applications.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 65,
        pvpWins: 38,
        hoursPlayed: 280,
        achievements: 22,
      },
      linkedin: 'https://linkedin.com/in/infancetony',
      github: 'https://github.com/infance-tony',
      portfolio: 'https://infance-tony.github.io',
      terminal: 'https://terminal.example.com',
    }
  }

  // Specific data for Hamdhan
  if (id === 'hamdhan') {
    return {
      ...member,
      bio: 'Hamdhan is a passionate data scientist who brings the "Fire Fist" energy to data analysis and machine learning. He excels at transforming raw data into powerful insights and building innovative solutions.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 58,
        pvpWins: 35,
        hoursPlayed: 260,
        achievements: 25,
      },
      linkedin: 'https://linkedin.com/in/hamdhan-hussain',
      github: 'https://github.com/Hamdhusam',
      portfolio: 'https://lovable.dev/projects/15278cb1-8afc-4b75-80b0-6271ef8114d2',
      terminal: 'https://terminal.example.com',
    }
  }

  // Specific data for Aparna
  if (id === 'aparna') {
    return {
      ...member,
      bio: 'Aparna is a talented web developer and UI/UX designer, earning her title as "Pirate Empress" through her exceptional design skills and full-stack development expertise. She creates beautiful, user-centered digital experiences.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 72,
        pvpWins: 41,
        hoursPlayed: 320,
        achievements: 30,
      },
      linkedin: 'https://www.linkedin.com/in/aparna-suresh-79276235a',
      github: 'https://github.com/Aparna-stack-ux782',
      portfolio: 'https://aparna-mindscape.lovable.app/',
      terminal: 'https://terminal.example.com',
    }
  }

  // Specific data for Nithisha
  if (id === 'nithisha') {
    return {
      ...member,
      bio: 'Nithisha is a dedicated data scientist known as the "Moon Princess" for her innovative approach to data analysis and mobile application development. She specializes in image processing and secure data collection systems.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 63,
        pvpWins: 37,
        hoursPlayed: 290,
        achievements: 26,
      },
      linkedin: 'https://www.linkedin.com/in/nithisha-p-n-362067332',
      github: 'https://github.com/nithishanagarani',
      portfolio: 'https://lovable.dev/projects/b892721e-ffec-4195-85d4-3878067cd541',
      terminal: 'https://terminal.example.com',
    }
  }

  // Specific data for Falin
  if (id === 'falin') {
    return {
      ...member,
      bio: 'Falin is a versatile web developer and UI/UX designer who embodies the "Black Leg" spirit through his dynamic full-stack development skills. He excels in Python, JavaScript, React, and creates engaging fitness and sports applications.',
      joinDate: 'Crew Since 2024',
      stats: {
        builds: 69,
        pvpWins: 33,
        hoursPlayed: 275,
        achievements: 24,
      },
      linkedin: 'https://www.linkedin.com/in/sandofalin',
      github: 'https://github.com/Falin-dev',
      portfolio: 'https://sportsdot.in',
      terminal: 'https://terminal.example.com',
    }
  }

  // Add default bio and stats to existing member data
  return {
    ...member,
    bounty: member.bounty || '100,000,000',
    bio: `${member.name} is a skilled pirate in the Lumina Crew, specializing as a ${member.role}. Known for their dedication and strategic prowess on the Grand Line.`,
    joinDate: 'Crew Since 2023',
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
    <section className="min-h-screen py-20 bg-minecraft-darker relative overflow-hidden">
      {/* Dark wooden board texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800/20 to-stone-900/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a8a29e' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 60L60 0H0v60zM60 60V0l-60 60h60z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <Link 
          to="/members"
          className="inline-flex items-center text-minecraft-green hover:text-green-400 mb-6 text-sm font-bold bg-minecraft-dark border-2 border-black/50 px-3 py-2 shadow-lg bounty-button"
        >
          <span className="mr-2">←</span> Back to Crew
        </Link>

        {/* Profile Container - Clean Bounty Style */}
        <div className="bg-minecraft-dark border-4 border-minecraft-green overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8">
            {/* Left Column - Avatar and Basic Info */}
            <div className="md:col-span-1">
              {/* Avatar - Full display */}
              <div className={`aspect-[3/4] border-4 ${member.borderColor} mb-6 overflow-hidden bg-black/40 relative`}>
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
              <div className={`bg-minecraft-green text-black text-center py-3 px-4 font-bold text-sm mb-4 border-2 border-black/50`}>
                {member.role}
                {member.type === 'captain' && (
                  <div className="text-xs mt-1">⚔️ CAPTAIN ⚔️</div>
                )}
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <div className="text-minecraft-green font-bold text-sm mb-2 minecraft-shadow">Contact Info:</div>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-minecraft-dark hover:bg-black/60 p-3 border-2 border-minecraft-green transition-all shadow-md"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-white text-sm font-bold">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Name and Role */}
              <div className="text-center border-b-4 border-minecraft-green pb-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 minecraft-shadow">
                  {member.name.toUpperCase()}
                </h1>
                <p className={`text-lg font-bold ${member.roleColor} minecraft-shadow`}>
                  {member.role}
                </p>
                {member.type === 'captain' && (
                  <div className="inline-block bg-red-700 text-white px-4 py-2 mt-2 border-2 border-red-900 shadow-lg">
                    <p className="text-sm font-bold minecraft-shadow">
                      ⚔️ CAPTAIN ⚔️
                    </p>
                  </div>
                )}
              </div>

              {/* Bio */}
              <div className="bg-minecraft-dark border-4 border-minecraft-green p-4">
                <h2 className="text-xl font-bold text-minecraft-green mb-3 minecraft-shadow border-b-2 border-minecraft-green pb-1">
                  🏴‍☠️ Pirate History
                </h2>
                <p className="text-minecraft-gray text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Join Date */}
              <div className="bg-minecraft-dark border-4 border-minecraft-green p-4">
                <h2 className="text-xl font-bold text-minecraft-green mb-3 minecraft-shadow border-b-2 border-minecraft-green pb-1">
                  ⚙️ Crew Since
                </h2>
                <p className="text-white text-sm font-bold">
                  {member.joinDate || 'Recent Recruit'}
                </p>
              </div>

              {/* Stats */}
              <div className="bg-minecraft-dark border-4 border-minecraft-green p-4">
                <h2 className="text-xl font-bold text-minecraft-green mb-4 minecraft-shadow border-b-2 border-minecraft-green pb-1">
                  ⚔️ Battle Statistics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 border-2 border-minecraft-green text-center">
                    <div className="text-2xl font-bold text-minecraft-green minecraft-shadow">
                      {member.stats?.builds || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs font-bold">BUILDS</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-minecraft-green text-center">
                    <div className="text-2xl font-bold text-minecraft-green minecraft-shadow">
                      {member.stats?.pvpWins || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs font-bold">VICTORIES</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-minecraft-green text-center">
                    <div className="text-2xl font-bold text-minecraft-green minecraft-shadow">
                      {member.stats?.hoursPlayed || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs font-bold">HOURS SAILED</div>
                  </div>
                  <div className="bg-black/30 p-4 border-2 border-minecraft-green text-center">
                    <div className="text-2xl font-bold text-minecraft-green minecraft-shadow">
                      {member.stats?.achievements || 0}
                    </div>
                    <div className="text-minecraft-gray text-xs font-bold">TREASURES</div>
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
