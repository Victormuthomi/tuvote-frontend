import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Join Tuvote Today!
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Experience secure, seamless, and trustworthy online voting.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
