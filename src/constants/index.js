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
    "I'm a third-year college student studying frontend development. I enjoy creating clean, responsive websites using React, JavaScript, PHP, MySQL, HTML, CSS, and Tailwind CSS. I'm always exploring new technologies and finding better ways to bring ideas to life.",
  resumeLinkText: "See More ->",
};

export const PROJECTS = [
  {
    name: "Ivatan Artchive",
    description:
      "A digital space dedicated to showcase the vibrant and unique artworks of Ivatan artists.",
    image: projects1,
    link: "http://marvindomingo.onlinewebshop.net/home.php",
  },
  {
    name: "Pokedex",
    description:
      "Discover everything you need to know about your favorite Pokémon with our Pokédex! ",
    image: projects2,
    link: "https://pokedex-pi-livid.vercel.app",
  },
  {
    name: "Personal Blog",
    description:
      " From technology and web development to personal experiences and insights.",
    image: projects3,
    link: "",
    noteText: "Not yet Uploaded",
  },
  {
    name: "BSC Enrollment System",
    description:
      "Efficiently manage student registrations and data, easy-to-use system designed for seamless enrollment.",
    image: projects4,
    noteText: "Not yet Uploaded",
  },
  {
    name: "To-Do List",
    description:
      "A simple and efficient tool to help you manage your tasks and stay organized.",
    image: projects5,
    noteText: "Not yet Uploaded",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a frontend developer in my third year of college, where I first discovered my passion for programming. Inspired by my twin brother, I started learning web development and got hooked on creating modern, responsive applications. I've worked on several projects, focusing on minimalistic and clean design.",
    "Though I'm still early in my journey as a developer, I'm committed to improving my skills with technologies like React.js and Tailwind CSS to create efficient and scalable user interfaces. I enjoy diving into new projects where I can apply these tools to solve real-world problems. I've also gained experience using PHP and MySQL for academic projects, where I've built basic systems like enrollment system and a simple blog. These experiences taught me the importance of backend functionality and how it complements frontend design.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Now",
    title: "Frontend Developer",
    location: "Lorem Ipsum ",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    yearRange: "2023 — 2024",
    title: "Frontend Developer ",
    location: "Lorem Ipsum",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    yearRange: "2022 — 2023",
    title: "Frontend Developer",
    location: "Lorem Ipsum London",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Curabitur pretium tincidunt lacus, ut dapibus ligula tincidunt et.",
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
      url: "https://github.com/Upring0808",
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
