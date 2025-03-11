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
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-2">
          Here are some common questions about Tuvote.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-5 rounded-lg shadow-md border cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-blue-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                className="mt-2 text-gray-600"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
