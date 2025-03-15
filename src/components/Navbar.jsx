import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For programmatic navigation
  const { user } = useSelector((state) => state.auth); // Get user from Redux store

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleHomeClick = () => {
    if (user) {
      navigate("/dashboard"); // Redirect to Dashboard if logged in
    } else {
      navigate("/"); // Redirect to Home if not logged in
    }
  };

  const navItems = [
    { name: "Candidates", path: "/candidates" },
    { name: "Elections", path: "/elections" },
    { name: "Results", path: "/results" },
  ];

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <button
        onClick={handleHomeClick}
        className="text-2xl font-bold text-blue-600 dark:text-blue-400"
      >
        Tuvote
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {/* Home Button */}
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
          onClick={handleHomeClick}
        >
          Home
        </motion.li>

        {navItems.map(({ name, path }, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Link to={path}>{name}</Link>
          </motion.li>
        ))}

        {/* Show Login/Logout based on user state */}
        {user ? (
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-red-600 cursor-pointer hover:text-red-400"
            onClick={handleLogout}
          >
            Logout
          </motion.li>
        ) : (
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Link to="/login">Login</Link>
          </motion.li>
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 right-4 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 flex flex-col space-y-4 md:hidden"
          >
            {/* Home Button */}
            <motion.li
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
              onClick={() => {
                handleHomeClick();
                setIsOpen(false);
              }}
            >
              Home
            </motion.li>

            {navItems.map(({ name, path }, index) => (
              <motion.li
                key={index}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                <Link to={path} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </motion.li>
            ))}

            {/* Show Login/Logout for Mobile */}
            {user ? (
              <motion.li
                whileTap={{ scale: 0.95 }}
                className="text-red-600 cursor-pointer hover:text-red-400"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Logout
              </motion.li>
            ) : (
              <motion.li
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
