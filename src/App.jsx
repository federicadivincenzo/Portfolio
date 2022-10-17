import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Contact from "./components/Contact"

import './App.css'

function App() {
  return (
    <div className="bg-slate-800 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  )

}

export default App
