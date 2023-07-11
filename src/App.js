import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team_members from './components/Team_members'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team_members />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
