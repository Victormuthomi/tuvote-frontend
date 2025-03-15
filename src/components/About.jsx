import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">Tuvote</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
            Tuvote is a next-generation online voting platform designed for
            security, transparency, and ease of use. Our mission is to enable
            organizations and institutions to conduct seamless and verifiable
            elections with cutting-edge technology.
          </p>
        </div>

        {/* Right Side - Image/Icon */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/about-us-image.svg"
            alt="About Tuvote"
            className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg p-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
