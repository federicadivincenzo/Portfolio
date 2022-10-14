import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Work from "./components/Work"

import './App.css'

function App() {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
    </div>
  )

}

export default App
