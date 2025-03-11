import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md py-4 px-8 flex justify-between items-center relative"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Tuvote</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {["Home", "Candidates", "Results", "Login"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden"
        >
          {["Home", "Candidates", "Results", "Login"].map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
