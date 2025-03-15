import { FaCheckCircle, FaUsers, FaVoteYea } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="py-20 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Why Choose Tuvote?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
        The future of secure, seamless, and trustworthy online voting.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16">
        <FeatureCard
          icon={<FaVoteYea size={36} />}
          title="Easy & Secure Voting"
          desc="Cast your vote from anywhere with our advanced security measures."
        />
        <FeatureCard
          icon={<FaUsers size={36} />}
          title="User-Centric Experience"
          desc="Designed for simplicity and ease of use, ensuring seamless participation."
        />
        <FeatureCard
          icon={<FaCheckCircle size={36} />}
          title="100% Tamper-Proof"
          desc="End-to-end encryption and blockchain-backed integrity."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
