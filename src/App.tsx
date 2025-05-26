import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingPreview from './components/BookingPreview';
import Practitioners from './components/Practitioners';
import Testimonials from './components/Testimonials';
import GiftMembership from './components/GiftMembership';
import Location from './components/Location';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="font-sans text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BookingPreview />
        <Practitioners />
        <Testimonials />
        <GiftMembership />
        <Location />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;