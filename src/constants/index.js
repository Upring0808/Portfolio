import projects1 from "../assets/ss4.png";
import projects2 from "../assets/ss3.png";
import projects3 from "../assets/ss2.png";
import projects4 from "../assets/ss5.png";
import projects5 from "../assets/ss1.png";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#experience", label: "Experience" },

  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Marvin Domingo",
  introduction:
    "I’m Marvin Geoffrey B. Domingo, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "See More ->",
};

export const PROJECTS = [
  {
    name: "Ivatan Artchive",
    description:
      "A digital space dedicated to showcase the vibrant and unique artworks of Ivatan artists.",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Pokedex",
    description:
      "Discover everything you need to know about your favorite Pokémon with our Pokédex! ",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "Personal Blog",
    description:
      " From technology and web development to personal experiences and insights",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "BSC Enrollment System",
    description:
      "Efficiently manage student registrations and data, easy-to-use system designed for seamless enrollment.",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "To-Do List",
    description:
      "A simple and efficient tool to help you manage your tasks and stay organized.",
    image: projects5,
    link: "https://github.com/your-github/fitconnect",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a passionate frontend developer currently in my third year of college, where I first discovered my love for programming. Inspired by my twin brother, I began my journey in web development and quickly became captivated by the art of building modern, responsive applications. Since then, I have worked on several projects, each reflecting my affinity for minimalistic and clean design.",
    "While still early in this journey, I am dedicated to honing my skills with technologies like React.js and Tailwind CSS to create efficient and scalable interfaces. I have also gained experience using PHP and MySQL to build basic systems for academic projects. My focus is on writing clean, maintainable code, and I am always eager to learn and grow through new challenges.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "domingomarvingeoffrey@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Marvin Geoffrey Domingo. All rights reserved.`,
};
