import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { AlertTriangle } from "lucide-react";

const Experience = () => {
  // Container animation for smooth staggered entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slower for smooth effect
        ease: "easeInOut", // Smoother easing curve
        staggerChildren: 0.2, // Slight delay between each item for a professional feel
      },
    },
  };

  // Child elements' animation
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slower for smoother transition
        ease: "easeInOut", // Smoother entrance
      },
    },
  };

  return (
    <section className="px-4 md:px-6 py-10 mb-20 -mt-3" id="experience">
      {/* Section title */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-white mb-8"></div>
      </div>

      {/* Warning or note section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smoother transition for the warning
        className="flex justify-center items-center -mt-[5px] mb-6 p-4 bg-yellow-300/80 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
      >
        <AlertTriangle size={20} className="mr-2" />
        <span className="font-semibold">Future Growth Zone</span>
      </motion.div>

      {/* Experience content */}
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Ensures it only animates when 30% of the content is in view
        variants={containerVariants} // Apply smoother container animation
      >
        {EXPERIENCES.length === 0 ? (
          <motion.div variants={childVariants} className="text-center py-10">
            <p className="text-lg sm:text-xl mb-4">
              No work experience yet, but great things are coming!
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              This section will be filled with amazing achievements soon.
            </p>
          </motion.div>
        ) : (
          EXPERIENCES.map((experience, index) => (
            <motion.div key={index} variants={childVariants}>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="text-xs sm:text-sm md:w-1/4 mb-2 md:mb-0 p-2 md:p-4">
                  {experience.yearRange}
                </div>

                <div className="md:w-3/4 mb-4 md:mb-0">
                  <div className="max-w-full md:max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                    <h2 className="text-lg md:text-xl mb-2">
                      {experience.title}
                    </h2>
                    <p className="mb-4 text-xs sm:text-sm italic">
                      {experience.location}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default Experience;
