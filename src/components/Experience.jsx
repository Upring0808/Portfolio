import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { AlertTriangle } from "lucide-react";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-4 md:px-6   py-10 mb-20 mt-10 " id="experience">
      {/* Warning or note section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center items-center -mt-[20px] mb-6 p-4 mt-20 bg-yellow-300/80 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
      >
        <AlertTriangle size={20} className="mr-2" />
        <span className="font-semibold">Future Growth Zone</span>
      </motion.div>

      {/* Section title */}
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
          Work Experience
        </h2>
        <div className="h-1 w-16 sm:w-20 mt-4 bg-white"></div>
      </div>

      {/* Experience content */}
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
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
