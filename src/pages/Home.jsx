import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaVoteYea } from "react-icons/fa";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/About.jsx";
import HowItWorks from "../components/Works.jsx";
import Testimonials from "../components/Testmonials.jsx";
import CTA from "../components/Cta.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

// Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-2xl"
  >
    <div className="flex justify-center items-center mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-md">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 tracking-wide">{title}</h3>
    <p className="mt-3 text-gray-600 text-lg leading-relaxed">{desc}</p>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* About us section */}
      <AboutUs />

      {/* Features Section */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Why Choose Tuvote?
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          The future of secure, seamless, and trustworthy online voting.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
          <FeatureCard
            icon={<FaVoteYea size={32} />}
            title="Easy & Secure Voting"
            desc="Cast your vote from anywhere with our advanced security measures."
          />
          <FeatureCard
            icon={<FaUsers size={32} />}
            title="User-Centric Experience"
            desc="Designed for simplicity and ease of use, ensuring seamless participation."
          />
          <FeatureCard
            icon={<FaCheckCircle size={32} />}
            title="100% Tamper-Proof"
            desc="End-to-end encryption and blockchain-backed integrity."
          />
        </div>
      </section>

      {/* How it works section */}
      <HowItWorks />

      {/* Testmonials section */}
      <Testimonials />

      <CTA />

      <FAQ />

      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
