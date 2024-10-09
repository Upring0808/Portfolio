import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jason from "../assets/upringy.JPG";

// Animation variants for text and images
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, y: 1, transition: { staggerChildren: 0.5 } },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const scrollToWorkSection = () => {
  const workSection = document.querySelector("#work");
  if (workSection) {
    workSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between p-4 md:p-8 mt-9">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-4 md:p-8 text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold my-4"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
            <motion.h3
              className="text-2xl font-light md:text-3xl lg:text-4xl font-medium text-gray-300"
              variants={textVariants}
            >
              Front-End Developer {/* Emphasize the title */}
            </motion.h3>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.button
            className="bg-white text-gray-900 px-6 py-3 lg:px-8 lg:py-4 inline-block rounded-full shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            onClick={scrollToWorkSection}
            variants={textVariants}
          >
            {HERO_CONTENT.resumeLinkText} {/* See More -> */}
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center p-4 md:p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={jason}
            alt="Marvin Domingo"
            className="rounded-lg w-[350px] h-[390px] md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
