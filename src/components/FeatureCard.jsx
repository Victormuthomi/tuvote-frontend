import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
  >
    <div className="flex justify-center items-center mb-6">
      <motion.div
        whileHover={{ rotate: 10 }}
        className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-5 rounded-full shadow-md"
      >
        {icon}
      </motion.div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
      {title}
    </h3>
    <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default FeatureCard;
