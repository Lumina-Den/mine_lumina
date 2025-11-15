import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MembersPage from './pages/MembersPage'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import JoinClanPage from './pages/JoinClanPage'
import RulesPage from './pages/RulesPage'
import MemberProfilePage from './pages/MemberProfilePage'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/member/:id" element={<MemberProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinClanPage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
