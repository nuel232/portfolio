"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  CodeIcon,
  GlobeIcon,
  LaptopIcon,
  RocketIcon,
  StackIcon,
} from "@radix-ui/react-icons";

const projects = [
  {
    Icon: CodeIcon,
    name: "Decentralized Voting System",
    description:
      "A secure and transparent voting platform built on Ethereum blockchain that enables tamper-proof voting records, remote voting, and maintains voter anonymity.",
    href: "#",
    cta: "View Project",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: RocketIcon,
    name: "Blockchain Certificate Authentication",
    description:
      "A decentralized application for storing and verifying academic certificates on the Ethereum blockchain with smart contracts and verification functionality.",
    href: "#",
    cta: "Explore Project",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: StackIcon,
    name: "Student Exeat Permission System",
    description:
      "A comprehensive MERN stack web application for Veritas University to manage student exeat permissions with a multi-stage approval workflow.",
    href: "#",
    cta: "See Project",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: LaptopIcon,
    name: "Gemini AI Integration",
    description:
      "A web application that integrates Google's Gemini AI model to provide conversational AI capabilities with a React-based UI.",
    href: "#",
    cta: "View Demo",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "Django Web Applications",
    description:
      "Multiple Django web applications including e-commerce platforms, weather applications, and API implementations using Django REST framework.",
    href: "#",
    cta: "See Portfolio",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing web development, blockchain and full-stack skills.
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-3">
          {projects.map((project) => (
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects; 