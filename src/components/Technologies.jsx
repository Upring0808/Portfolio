import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> }, // Added React Native
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Technologies = () => {
  return (
    <section className="px-6 py-10 mb-3" id="technologies">
      <h2 className="text-4xl pt-10 -mt-10 md:text-6xl font-medium tracking-tight mb-8">
        Technologies
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
          >
            <div className="text-6xl">{tech.icon}</div>
            <p className="text-xl">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
