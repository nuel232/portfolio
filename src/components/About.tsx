"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Skill data for visualization
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 63 },
      { name: "JavaScript/TypeScript", level: 63 },
      { name: "HTML/CSS", level: 67 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Responsive Design", level: 63 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js/Express", level: 60 },
      { name: "Django", level: 42 },
      { name: "MongoDB", level: 56 },
      { name: "MySQL", level: 53 },
      { name: "RESTful APIs", level: 60 },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solidity", level: 56 },
      { name: "Ethereum", level: 53 },
      { name: "Smart Contracts", level: 56 },
      { name: "Web3.js", level: 53 },
      { name: "DApp Development", level: 53 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git/GitHub", level: 63 },
      { name: "AWS", level: 49 },
      { name: "Docker", level: 46 },
      { name: "CI/CD", level: 49 },
      { name: "Testing", level: 53 },
    ],
  },
];

// Education data
const educationData = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Veritas University",
    location: "Abuja",
    period: "Oct 2021 – Jun 2025",
  },
  {
    degree: "IoT Fundamentals: Connecting Things",
    institution: "CISCO Networking Academy",
    location: "",
    period: "Oct 2023 – Jun 2024",
  },
  {
    degree: "Advanced JavaScript",
    institution: "Codecademy",
    location: "",
    period: "Aug 2023 – Nov 2023",
  },
];

// Experience data
const experienceData = [
  {
    position: "Back-end Developer",
    company: "HNG Tech",
    location: "Abuja",
    period: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Formed backend committees to assign tasks and manage features like Auth, Settings, and Payments.",
      "Managed task assignments and reallocations to enhance productivity and accountability.",
      "Completed at least one working feature per week, exceeding expectations for higher grading.",
      "Set up and deployed a basic web server with an API endpoint.",
    ],
  },
  {
    position: "Web Developer Intern",
    company: "Olog Incorporated",
    location: "Abuja",
    period: "Aug 2023 – Oct 2023",
    responsibilities: [
      "Enhanced HTML and CSS skills during my internship at Olog Inc.",
      "Designed and styled user interfaces for various web development projects.",
      "Implemented dynamic functionality using JavaScript.",
    ],
  },
];

// Services data
const servicesData = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks and responsive design",
    icon: "🌐",
  },
  {
    title: "Blockchain Solutions",
    description: "Smart contracts, DApps, and blockchain integrations for various use cases",
    icon: "⛓️",
  },
  {
    title: "UI/UX Design",
    description: "User-friendly interfaces with focus on accessibility and user experience",
    icon: "🎨",
  }
];

// Animation variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        
        {/* About Me Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate developer with expertise in both web and blockchain technologies, focused on creating beautiful, functional, and secure applications.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700/30">
              <div className="h-96 bg-gray-100 dark:bg-gray-800 relative">
                {/* Profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/profile.jpg" 
                    alt="Kelechi's Profile Picture" 
                    width={280} 
                    height={280} 
                    className="rounded-xl object-cover shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-blue-500 dark:text-blue-400 text-center';
                        fallback.innerHTML = '<span class="text-8xl">👨‍💻</span><p class="text-sm mt-2">Please add profile.jpg to public folder</p>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/5 dark:bg-blue-500/10"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-blue-500/5 dark:bg-blue-500/10"></div>
              </div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700/30 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Kelechi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate and skilled full-stack developer with a strong focus on blockchain technologies. 
                My journey in technology started with a deep interest in how digital solutions can solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Currently pursuing my degree in Computer Science at Veritas University, I balance my academic work with 
                practical experience in developing web applications and blockchain solutions. My approach combines technical 
                expertise with creative problem-solving.
              </p>
              
              {/* Download CV Button */}
              <div className="mb-6">
                <a 
                  href="/portfolio/CV.pdf" 
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors shadow-lg hover:shadow-blue-600/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-500 dark:text-blue-400">📧</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">nwankwoala3@Gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-500 dark:text-blue-400">📱</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">+234 915 641 4321</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-500 dark:text-blue-400">📍</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Abuja, Nigeria</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Education</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and continuing educational journey
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 overflow-hidden shadow-md border border-gray-300 dark:border-gray-700/30">
                  {/* Decoration line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                  
                  {/* Icon */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center opacity-10">
                    <span className="text-5xl">🎓</span>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-500 dark:text-blue-400">
                      <span className="text-xl">🎓</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-300 font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        {edu.location && (
                          <>
                            <span>{edu.location}</span>
                            <span className="mx-2">•</span>
                          </>
                        )}
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and work experience
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 overflow-hidden shadow-md border border-gray-300 dark:border-gray-700/30">
                  {/* Decoration line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                  
                  {/* Icon */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center opacity-10">
                    <span className="text-5xl">💼</span>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-500 dark:text-blue-400">
                      <span className="text-xl">💼</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{exp.period}</span>
                      </div>
                      
                      <p className="text-blue-600 dark:text-blue-300 font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.location}</p>
                      
                      <ul className="space-y-2 mt-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My technical expertise and capabilities
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Skills Visualization */}
            <div className="bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700/30 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
              {/* Tabs */}
              <div className="flex flex-wrap mb-8 border-b border-gray-200 dark:border-gray-700">
                {skills.map((skill) => (
                  <button
                    key={skill.category}
                    className={`py-3 px-4 text-sm font-medium border-b-2 -mb-px transition-colors ${
                      activeCategory === skill.category
                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
                    }`}
                    onClick={() => setActiveCategory(skill.category)}
                  >
                    {skill.category}
                  </button>
                ))}
              </div>
              
              {/* Skill bars */}
              <div className="space-y-6">
                {skills
                  .find((s) => s.category === activeCategory)
                  ?.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-blue-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Skill Summary */}
            <div className="space-y-4">
              <div className="p-6 bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700/30 shadow-md relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500/5 dark:bg-blue-500/10"></div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Web Development</h4>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  Experienced in building responsive and interactive web applications using modern JavaScript frameworks like React. Proficient in HTML, CSS, and various CSS frameworks including Tailwind CSS.
                </p>
              </div>
              <div className="p-6 bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700/30 shadow-md relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500/5 dark:bg-blue-500/10"></div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Blockchain Development</h4>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  Specialized in developing decentralized applications (DApps) using Solidity and Ethereum. Experienced in smart contract development, testing, and deployment with knowledge of Web3.js for frontend integration.
                </p>
              </div>
              <div className="p-6 bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700/30 shadow-md relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500/5 dark:bg-blue-500/10"></div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Backend Development</h4>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  Proficient in building robust server-side applications using Node.js/Express and Django. Experienced in database design and management with MongoDB and MySQL.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              How I can help bring your ideas to life
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
          >
            {servicesData.slice(0, 3).map((service, index) => (
              <motion.div 
                key={index} 
                className="group bg-gray-100/50 dark:bg-gray-800/50 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-all overflow-hidden relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-blue-500/5 dark:bg-blue-500/10 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                
                <div className="p-6 relative z-10">
                  <div className="w-16 h-16 mb-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 