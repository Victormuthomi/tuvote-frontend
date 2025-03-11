import { motion } from "framer-motion";
import { FaUserPlus, FaVoteYea, FaChartBar } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus size={32} className="text-white" />,
      title: "Register",
      desc: "Sign up and verify your identity to access the voting system.",
    },
    {
      icon: <FaVoteYea size={32} className="text-white" />,
      title: "Vote",
      desc: "Cast your vote securely with our encrypted system.",
    },
    {
      icon: <FaChartBar size={32} className="text-white" />,
      title: "Results",
      desc: "View instant and tamper-proof election results.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        How It Works
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        A simple and secure voting process in three easy steps.
      </p>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12 px-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-2xl max-w-xs"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full shadow-md">
                {step.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-600 text-lg leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
