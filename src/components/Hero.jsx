import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import WalterWhite from './WalterWhite'

const Hero = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Cherry Blossom Three.js Animation
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // Transparent background
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    // Create cherry blossom petals
    const petals = []
    const petalGeometry = new THREE.PlaneGeometry(0.1, 0.1)
    
    // Create petal material with pink gradient
    const petalMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFB6C1, // Light pink
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    })

    // Create multiple petals
    for (let i = 0; i < 80; i++) {
      const petal = new THREE.Mesh(petalGeometry, petalMaterial.clone())
      
      // Random positioning
      petal.position.x = (Math.random() - 0.5) * 20
      petal.position.y = Math.random() * 15 + 5
      petal.position.z = (Math.random() - 0.5) * 10
      
      // Random rotation
      petal.rotation.x = Math.random() * Math.PI
      petal.rotation.y = Math.random() * Math.PI
      petal.rotation.z = Math.random() * Math.PI
      
      // Add random properties for animation
      petal.userData = {
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: -Math.random() * 0.03 - 0.01,
        speedZ: (Math.random() - 0.5) * 0.02,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        swayAmplitude: Math.random() * 0.5 + 0.2,
        swaySpeed: Math.random() * 0.02 + 0.01
      }
      
      scene.add(petal)
      petals.push(petal)
    }

    camera.position.z = 5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      petals.forEach((petal, index) => {
        // Falling motion
        petal.position.y += petal.userData.speedY
        
        // Swaying motion
        petal.position.x += Math.sin(Date.now() * petal.userData.swaySpeed + index) * petal.userData.swayAmplitude * 0.001
        petal.position.z += petal.userData.speedZ
        
        // Rotation
        petal.rotation.x += petal.userData.rotationSpeed
        petal.rotation.y += petal.userData.rotationSpeed * 0.5
        petal.rotation.z += petal.userData.rotationSpeed * 0.3
        
        // Reset position when petal falls too low
        if (petal.position.y < -10) {
          petal.position.y = Math.random() * 5 + 10
          petal.position.x = (Math.random() - 0.5) * 20
          petal.position.z = (Math.random() - 0.5) * 10
        }
        
        // Keep petals within bounds
        if (Math.abs(petal.position.x) > 12) {
          petal.position.x = (Math.random() - 0.5) * 20
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])
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
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: "url('/bg.jpeg')",
        }}
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-minecraft-darker/70" />
      
      {/* Three.js Cherry Blossom Animation Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Hero Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Welcome Text Section */}
        <div className="text-center pb-4">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white minecraft-shadow leading-tight">
              Welcome to LUMINA!
            </h1>
            <p className="text-lg sm:text-xl text-white minecraft-shadow">
              Builders, Adventurers, and Friends
            </p>
          </div>
        </div>

        {/* Main Content Section - Character and Cards */}
        <div className="space-y-8">
          {/* Walter White Animation - Center */}
          <div className="flex justify-center">
            <WalterWhite />
          </div>

          {/* Info Cards - Below Character in Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-minecraft-dark border-4 border-black/50 p-4 relative z-10"
              >
                {/* Icon - Pixel art style */}
                <div className="mb-4">
                  <PixelIcon type={card.iconType} />
                </div>
                
                {/* Title */}
                <h3 className="text-xs font-bold text-white mb-2 minecraft-shadow">
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
      </div>
    </section>
  )
}

export default Hero
