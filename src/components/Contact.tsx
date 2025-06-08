"use client";

import { useState } from "react";
import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

const socialLinks = [
  { name: "GitHub", icon: "github", url: "https://github.com/" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com/" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com/" },
  { name: "Medium", icon: "medium", url: "https://medium.com/" },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formState);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together on a web or blockchain project? Let&apos;s discuss how we can collaborate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((step) => (
                        <div
                          key={step}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            step === formStep
                              ? "bg-blue-500"
                              : step < formStep
                              ? "bg-green-500"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Step {formStep + 1} of 3</span>
                  </div>
                  
                  {/* Step content */}
                  <div className="mt-8">
                    {formStep === 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Your Information</h3>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {formStep === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Project Details</h3>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe your project or collaboration idea"
                            required
                          ></textarea>
                        </div>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="w-1/2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="w-1/2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {formStep === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Confirm & Submit</h3>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</p>
                              <p className="font-medium">{formState.name}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                              <p className="font-medium">{formState.email}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Message</p>
                            <p className="font-medium whitespace-pre-line">{formState.message}</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="w-1/2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="w-1/2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <>
                                <PaperPlaneIcon className="mr-2" /> Send Message
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setFormState({ name: "", email: "", message: "" });
                    setFormStep(0);
                    setIsSubmitted(false);
                  }}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className="lg:pl-8">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <EnvelopeClosedIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:kelechi@example.com" className="text-blue-500 hover:underline">
                      kelechi@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-stack development with MERN stack and modern frameworks</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Blockchain</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DApp development, smart contracts, and Ethereum ecosystem</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Responsive interfaces with modern frameworks and design patterns</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">DevOps</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AWS deployment, CI/CD pipelines, and containerization</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              {/* Social Links */}
              <div className="relative">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                        <span className="text-2xl">{getSocialIcon(link.icon)}</span>
                      </div>
                      <span className="block text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get social media icons
function getSocialIcon(iconName: string) {
  switch (iconName) {
    case "github":
      return "👨‍💻";
    case "linkedin":
      return "💼";
    case "twitter":
      return "🐦";
    case "instagram":
      return "📷";
    case "medium":
      return "✍️";
    default:
      return "🔗";
  }
}

export default Contact; 