import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "Tuvote made our elections seamless and transparent. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kimani",
    review:
      "A secure and easy-to-use platform for online voting. Loved the experience!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Fatima Hassan",
    review:
      "The interface is user-friendly, and the security is top-notch. Great job!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">
        What Our Users Say
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        Trusted by many organizations and institutions.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              {testimonial.name}
            </h3>
            <p className="mt-3 text-gray-600 text-lg leading-relaxed">
              “{testimonial.review}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
