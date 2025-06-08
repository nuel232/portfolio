"use client";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Web Development",
    description: "Building responsive and interactive web applications with modern frameworks.",
    href: "/",
    cta: "View projects",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Frontend Design",
    description: "Creating beautiful user interfaces with attention to detail and usability.",
    href: "/",
    cta: "See designs",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Full Stack",
    description: "End-to-end development from database to user interface.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Project Management",
    description: "Planning and executing projects from concept to completion.",
    href: "/",
    cta: "See workflow",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Continuous Learning",
    description:
      "Always staying up to date with the latest technologies and best practices.",
    href: "/",
    cta: "Explore skills",
    background: <div className="absolute -right-20 -top-20 opacity-60"></div>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { BentoDemo }; 