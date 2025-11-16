import React from 'react'
import { Link } from 'react-router-dom'

export const membersData = [
  // Captains
  {
    id: 'vishal',
    name: 'Vishal',
    imageName: 'Vishal.webp',
    role: 'Lead Performer',
    type: 'captain',
    bgColor: 'bg-gradient-to-br from-slate-800 to-slate-900',
    cardBg: 'bg-gradient-to-br from-slate-900 to-black',
    borderColor: 'border-emerald-500',
    roleColor: 'text-emerald-400',
  },
  {
    id: 'ajisha',
    name: 'Ajisha',
    imageName: 'Ajisha.webp',
    role: 'Lead Performer',
    type: 'captain',
    bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    cardBg: 'bg-gradient-to-br from-gray-900 to-black',
    borderColor: 'border-red-500',
    roleColor: 'text-red-400',
  },
  // Regular members
  {
    id: 'abin',
    name: 'Abin',
    imageName: 'Abin.webp',
    role: 'Crystal Warrior',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-blue-500',
    roleColor: 'text-blue-400',
  },
  {
    id: 'akshaya',
    name: 'Akshaya',
    imageName: 'Akshaya.webp',
    role: 'Inferno Knight',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-orange-500',
    roleColor: 'text-orange-400',
  },
  {
    id: 'aparna',
    name: 'Aparna',
    imageName: 'Aparna.webp',
    role: 'Frost Sentinel',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-cyan-500',
    roleColor: 'text-cyan-400',
  },
  {
    id: 'falin',
    name: 'Falin',
    imageName: 'Falin.webp',
    role: 'Thunder Warden',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-yellow-500',
    roleColor: 'text-yellow-400',
  },
  {
    id: 'hamdhan',
    name: 'Hamdhan',
    imageName: 'Hamdhan.webp',
    role: 'Shadow Operative',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-purple-500',
    roleColor: 'text-purple-400',
  },
  {
    id: 'jenish',
    name: 'Jenish',
    imageName: 'Jenish.webp',
    role: 'War Engineer',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-gray-500',
    roleColor: 'text-gray-400',
  },
  {
    id: 'nithisha',
    name: 'Nithisha',
    imageName: 'Nithisha.webp',
    role: 'Arcane Duelist',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-emerald-500',
    roleColor: 'text-emerald-400',
  },
  {
    id: 'tony',
    name: 'Tony',
    imageName: 'Tony.webp',
    role: 'Elite Ranger',
    type: 'member',
    bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
    cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    borderColor: 'border-green-500',
    roleColor: 'text-green-400',
  },
]

const Members = () => {
  // Avatar component using local images from Avatar_Bounty folder
  const MemberAvatar = ({ imageName, name, isHoverable = false, aspectRatio = "square" }) => {
    const avatarUrl = `/Avatar_Bounty/${imageName}`
    
    return (
      <div className={`w-full h-full flex items-center justify-center overflow-hidden ${isHoverable ? 'transition-all duration-300 hover:scale-105' : ''}`}>
        <img 
          src={avatarUrl}
          alt={`${name}'s Avatar`}
          className={`w-full h-full ${aspectRatio === 'square' ? 'object-contain' : 'object-cover'}`}
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
    )
  }

  // Captains - Top tier leadership (Vishal and Ajisha)
  const captains = membersData.filter(member => member.type === 'captain')

  // Regular members - Skilled warriors
  const clanMembers = membersData.filter(member => member.type === 'member')

  return (
    <section className="min-h-screen py-20 bg-minecraft-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 minecraft-shadow">
            Lumina Kaizokudan
          </h1>
          <p className="text-minecraft-gray text-base max-w-2xl mx-auto leading-relaxed">
            Meet the legendary warriors who forge our destiny in the realm of blocks and dreams.
          </p>
        </div>

        {/* Captains Section */}
        <div className="mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {captains.map((captain) => (
              <div key={captain.id} className="text-center">
                <Link
                  to={`/member/${captain.id}`}
                  className="block relative group"
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-yellow-500 hover:shadow-2xl transition-all duration-300">
                    <MemberAvatar imageName={captain.imageName} name={captain.name} isHoverable={true} aspectRatio="portrait" />
                    <div className="absolute top-2 right-2">
                      <div className="bg-yellow-500 px-2 py-1 rounded">
                        <span className="text-black text-xs font-bold">★ CAPTAIN ★</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="mt-4">
                  <h3 className="text-white text-xl font-bold mb-1 minecraft-shadow">
                    {captain.name}
                  </h3>
                  <p className="text-yellow-400 text-sm font-bold mb-1">
                    {captain.role}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {captain.joinDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clan Members Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 minecraft-shadow">
            Elite Warriors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clanMembers.map((member) => (
              <div key={member.id} className="text-center">
                <Link
                  to={`/member/${member.id}`}
                  className="block group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-3 border-gray-500 hover:shadow-xl transition-all duration-300 bg-gray-800">
                    <MemberAvatar imageName={member.imageName} name={member.name} isHoverable={true} aspectRatio="square" />
                  </div>
                </Link>
                <div className="mt-3">
                  <h3 className="text-white text-sm font-bold mb-1 minecraft-shadow">
                    {member.name}
                  </h3>
                  <p className={`text-xs font-semibold ${member.roleColor}`}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 border-4 border-purple-500 rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3 minecraft-shadow">
              Join the Lumina Legacy
            </h3>
            <p className="text-purple-200 mb-4 text-sm">
              Think you have what it takes to stand among legends? Prove your worth and earn your place in our ranks.
            </p>
            <Link
              to="/join-clan"
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg border-2 border-purple-400 transition-all duration-300 hover:scale-105 text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
