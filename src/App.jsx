import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MembersPage from './pages/MembersPage'
import EventsPage from './pages/EventsPage'
import JoinClanPage from './pages/JoinClanPage'
import RulesPage from './pages/RulesPage'
import MemberProfilePage from './pages/MemberProfilePage'
import DynamicCursor from './components/DynamicCursor'

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
      <div className="min-h-screen overflow-x-hidden" style={{ cursor: 'none' }}>
        <DynamicCursor />
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/member/:id" element={<MemberProfilePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinClanPage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
