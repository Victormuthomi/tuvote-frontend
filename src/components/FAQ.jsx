import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How secure is Tuvote?",
    answer:
      "Tuvote uses end-to-end encryption and blockchain technology to ensure every vote is secure and tamper-proof.",
  },
  {
    question: "Can I vote from any device?",
    answer:
      "Yes, you can vote from your phone, tablet, or computer as long as you have an internet connection.",
  },
  {
    question: "How do I verify my vote?",
    answer:
      "Once you cast your vote, you will receive a unique verification code that you can use to confirm your vote was recorded correctly.",
  },
  {
    question: "Who can use Tuvote?",
    answer:
      "Tuvote is designed for schools, organizations, and governments looking for a secure online voting solution.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-2 dark:text-gray-400">
          Here are some common questions about Tuvote.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className="text-blue-600 dark:text-blue-400 text-xl transition-transform"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
