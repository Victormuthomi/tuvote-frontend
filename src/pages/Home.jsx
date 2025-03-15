import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/About";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/Works";
import Testimonials from "../components/Testmonials";
import CTA from "../components/Cta";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";

const HomePage = () => {
  // Get authentication status from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // If logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
