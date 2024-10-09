import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Motion variants for a smoother and more creative entrance
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9, // Slight scale down for a subtle pop effect
      y: 30, // Smooth vertical movement for entrance
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1, // Extended duration for smoother effect
        ease: [0.42, 0, 0.58, 1], // Ease-in-out cubic-bezier for smoother transitions
      },
    },
  };

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Projects
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-500" // GPU-optimized hover scaling
            initial="hidden"
            whileInView="visible" // Animates only when in view
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
            variants={projectVariants}
          >
            {/* Image at the top */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-30 object-cover rounded-t-lg"
            />

            {/* Text below the image */}
            <div className="p-6 flex flex-col justify-between bg-gray-900/55 text-white rounded-b-lg">
              <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
              <p className="mb-4 text-lg">{project.description}</p>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black rounded-full py-2 px-4 text-sm hover:bg-yellow-600 text-center"
                >
                  Click to view
                </a>
              ) : (
                <div className="text-yellow-500 font-semibold">Coming Soon</div>
              )}

              {project.noteText && (
                <div className="italic flex justify-center rounded-xl bg-yellow-500 text-black font-semibold p-2 mt-4">
                  {project.noteText}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
