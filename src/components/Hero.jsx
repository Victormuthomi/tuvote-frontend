import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import voteImage from "../assets/vote.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 px-6 md:px-16 py-10">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Secure & Transparent Online Voting
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Vote with confidence in a secure, fair, and efficient system.
        </motion.p>

        {/* Call to Action Buttons with Links */}
        <motion.div
          className="flex justify-center md:justify-start space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/register" // ✅ Navigate to register page
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/about" // ✅ Navigate to about page
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <img
          src={voteImage}
          alt="Voting illustration"
          className="w-full rounded-lg shadow-md bg-gray-100 dark:bg-gray-900"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
