import React from 'react';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App Component - This combines all sections
function App() {
  return (
    <div className="App">
      {/* Navigation Bar - Always visible at top */}
      <Navbar />
      
      {/* Hero Section - First thing visitors see */}
      <Hero />
      
      {/* About Section -  introduction */}
      <About />
      
      {/* Skills Section - technical abilities */}
      <Skills />
      
      {/* Projects Section -  work samples */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer - Bottom of page */}
      <Footer />
    </div>
  );
}

export default App;
