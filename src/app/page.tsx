import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Script from "next/script";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Script id="schema-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kelechi",
            "url": "https://nwankwoala.com.ng",
            "image": "https://nwankwoala.com.ng/profile2.jpg",
            "sameAs": [
              "https://github.com/your-github-username",
              "https://linkedin.com/in/your-linkedin-username",
              "https://twitter.com/your-twitter-username"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": "Full-stack developer specializing in web and blockchain technologies"
          }
        `}
      </Script>
      <Navbar />
      <main className="relative w-full">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Kelechi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 