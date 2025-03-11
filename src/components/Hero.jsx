import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-6">
      <div className="max-w-3xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Secure & Transparent Online Voting
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Vote with confidence in a secure, fair, and efficient system.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Image (Uncomment when ready) */}
        {/* <motion.img 
          src="/path-to-your-image.jpg"
          alt="Voting illustration"
          className="mt-8 w-full max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        /> */}
      </div>
    </section>
  );
};

export default Hero;
