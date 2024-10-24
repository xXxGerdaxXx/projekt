import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import BrandsSection from '../components/Brands';
import HowItWorksSection from '../components/Hero2';
import Hero3Section from '../components/Hero3';
import TestimonialsSection from '../components/Hero4';
import FAQSection from '../components/Faq';
import Subscribe from '../components/Subscribe';


const Home = () => {
    return (
        <>
        <HeroSection />
        
        <BrandsSection/>
        <FeaturesSection />
        <HowItWorksSection />
        <Hero3Section />
        <TestimonialsSection />
        <FAQSection />
        <Subscribe />
        <Footer />
        </>
        
    )
}
export default Home