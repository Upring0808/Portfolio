import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        ease: "easeOut",
        bounce: 0.4,
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
            className="relative rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                  rel="noopener norefferer"
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
