import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center dark:bg-blue-700">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Join Tuvote Today!
        </h2>
        <p className="mt-4 text-lg text-gray-200 dark:text-gray-300">
          Experience secure, seamless, and trustworthy online voting.
        </p>

        {/* Get Started Button as a Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block"
        >
          <Link
            to="/register" // ✅ Navigates to the registration page
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
