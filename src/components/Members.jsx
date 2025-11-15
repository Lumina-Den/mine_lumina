import React from 'react'
import { Link } from 'react-router-dom'

export const membersData = [
  // Will be populated below
]

const Members = () => {
  // Avatar component using Minotar API
  const PixelAvatar = ({ username, bgColor }) => {
    // Using bust API to show character from chest up
    const avatarUrl = `https://minotar.net/bust/${username}/200.png`
    
    return (
      <div className={`${bgColor} w-full h-full flex items-center justify-center p-4 transition-all duration-300`}>
        <img 
          src={avatarUrl}
          alt={`${username}'s Minecraft Skin`}
          className="w-full h-full object-contain pixelated drop-shadow-lg"
          style={{ imageRendering: 'pixelated' }}
          onError={(e) => {
            e.target.src = 'https://minotar.net/bust/Steve/200.png'
          }}
        />
      </div>
    )
  }

  // Captains - Top tier leadership
  const captains = [
    {
      id: 'shadowblade',
      name: 'ShadowBlade',
      username: 'Roronoa_Zoro', // One Piece Zoro skin
      role: 'Clan Commander',
      bgColor: 'bg-gradient-to-br from-slate-800 to-slate-900',
      cardBg: 'bg-gradient-to-br from-slate-900 to-black',
      borderColor: 'border-emerald-500',
      roleColor: 'text-emerald-400',
      joinDate: 'Founder - 2019',
    },
    {
      id: 'netherlord',
      name: 'NetherLord',
      username: 'wither_skeleton', // Unique character skin
      role: 'Vice Commander',
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
      cardBg: 'bg-gradient-to-br from-gray-900 to-black',
      borderColor: 'border-red-500',
      roleColor: 'text-red-400',
      joinDate: 'January 2020',
    },
  ]

  // Regular members - Skilled warriors
  const clanMembers = [
    {
      id: 'crystalguard',
      name: 'CrystalGuard',
      username: 'DiamondMinecart', // Popular diamond-themed skin
      role: 'Crystal Warrior',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-blue-500',
      roleColor: 'text-blue-400',
    },
    {
      id: 'flamestrike',
      name: 'FlameStrike',
      username: 'Blaze', // Minecraft blaze mob skin
      role: 'Inferno Knight',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-orange-500',
      roleColor: 'text-orange-400',
    },
    {
      id: 'frostbane',
      name: 'FrostBane',
      username: 'Stray', // Ice skeleton skin
      role: 'Frost Sentinel',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-cyan-500',
      roleColor: 'text-cyan-400',
    },
    {
      id: 'stormbreaker',
      name: 'StormBreaker',
      username: 'Zeus', // Thunder god skin
      role: 'Thunder Warden',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-yellow-500',
      roleColor: 'text-yellow-400',
    },
    {
      id: 'voidwalker',
      name: 'VoidWalker',
      username: 'Enderman', // Enderman skin
      role: 'Shadow Operative',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-purple-500',
      roleColor: 'text-purple-400',
    },
    {
      id: 'ironforge',
      name: 'IronForge',
      username: 'IronGolem', // Iron golem skin
      role: 'War Engineer',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-gray-500',
      roleColor: 'text-gray-400',
    },
    {
      id: 'mysticblade',
      name: 'MysticBlade',
      username: 'Wizard', // Wizard/enchanter skin
      role: 'Arcane Duelist',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-emerald-500',
      roleColor: 'text-emerald-400',
    },
    {
      id: 'nighthawk',
      name: 'NightHawk',
      username: 'Archer', // Archer/ranger skin
      role: 'Elite Ranger',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-800',
      cardBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
      borderColor: 'border-green-500',
      roleColor: 'text-green-400',
    },
  ]

  return (
    <section className="min-h-screen py-20 bg-minecraft-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 minecraft-shadow">
            Lumina Clan Elite
          </h1>
          <p className="text-minecraft-gray text-base max-w-2xl mx-auto leading-relaxed">
            Meet the legendary warriors who forge our destiny in the realm of blocks and dreams.
          </p>
        </div>

        {/* Captains Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 minecraft-shadow">
            Command Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {captains.map((captain) => (
              <Link
                key={captain.id}
                to={`/member/${captain.id}`}
                className={`${captain.cardBg} border-4 ${captain.borderColor} overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
              >
                {/* Captain Avatar */}
                <div className="aspect-[4/3] border-b-4 border-current relative overflow-hidden">
                  <PixelAvatar username={captain.username} bgColor={captain.bgColor} />
                  <div className="absolute top-2 right-2">
                    <div className={`${captain.borderColor.replace('border-', 'bg-')} px-2 py-1`}>
                      <span className="text-white text-xs font-bold">★ CAPTAIN ★</span>
                    </div>
                  </div>
                </div>

                {/* Captain Info */}
                <div className={`${captain.borderColor.replace('border-', 'bg-')} p-3 text-center`}>
                  <h3 className="text-white text-lg font-bold mb-1 minecraft-shadow group-hover:text-yellow-300 transition-colors">
                    {captain.name}
                  </h3>
                  <p className="text-white text-sm font-bold mb-1">
                    {captain.role}
                  </p>
                  <p className="text-gray-200 text-xs">
                    {captain.joinDate}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Clan Members Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 minecraft-shadow">
            Elite Warriors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {clanMembers.map((member) => (
              <Link
                key={member.id}
                to={`/member/${member.id}`}
                className={`${member.cardBg} border-3 ${member.borderColor} overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
              >
                {/* Member Avatar */}
                <div className="aspect-square border-b-3 border-current relative overflow-hidden">
                  <PixelAvatar username={member.username} bgColor={member.bgColor} />
                </div>

                {/* Member Info */}
                <div className={`${member.borderColor.replace('border-', 'bg-')} p-2 text-center`}>
                  <h3 className="text-white text-xs font-bold mb-1 minecraft-shadow group-hover:text-yellow-300 transition-colors truncate">
                    {member.name}
                  </h3>
                  <p className="text-white text-xs font-semibold">
                    {member.role}
                  </p>
                </div>
              </Link>
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
