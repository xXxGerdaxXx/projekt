import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Contact from './components/Contact';
import MapAndCenters from './components/MapAndCenters';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import BrandsSection from './components/Brands';
import FeaturesSection from './components/AppFeatures';
import HowItWorksSection from './components/Hero2';
import Hero3Section from './components/Hero3';
import TestimonialsSection from './components/Hero4';
import FAQSection from './components/Faq';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <BrandsSection />
                  <FeaturesSection />
                  <HowItWorksSection />
                  <Hero3Section />
                  <TestimonialsSection />
                  <FAQSection />
                  <Subscribe />
                </>
              } 
            />

            {/* Contact Us Page Route */}
            <Route 
              path="/contact" 
              element={
                <>
                  <Breadcrumb />
                  <Contact />
                  <MapAndCenters />
                  {/* No need for Footer here, it's already outside the Routes */}
                </>
              } 
            />
          </Routes>
        </main>

        {/* Footer will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

