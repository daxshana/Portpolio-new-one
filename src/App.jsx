import React from 'react';
import Navbar from './components/Navbar';
// import Profile from './components/Profile';
import Hero from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
