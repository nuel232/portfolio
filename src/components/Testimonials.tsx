"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
}

const initialTestimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    image: "/testimonials/john.jpg",
    content: "Kelechi is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding."
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    company: "Innovate Inc",
    image: "/testimonials/jane.jpg",
    content: "Working with Kelechi was a pleasure. He's not only technically skilled but also great at communication and collaboration."
  },
  {
    name: "Mike Johnson",
    role: "CTO",
    company: "StartupX",
    image: "/testimonials/mike.jpg",
    content: "Kelechi's expertise in front-end development helped us build a robust and scalable application. His contributions were invaluable."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo
      type: 'tween',
    },
  }),
};

function UserIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-muted-foreground"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <rect x="4" y="16" width="16" height="6" rx="3" fill="currentColor" />
    </svg>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [form, setForm] = useState({ name: '', role: '', company: '', content: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.role || !form.company || !form.content) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setTestimonials([
        ...testimonials,
        {
          name: form.name,
          role: form.role,
          company: form.company,
          content: form.content,
        },
      ]);
      setForm({ name: '', role: '', company: '', content: '' });
      setSubmitting(false);
      setShowModal(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from colleagues, clients, and mentors about their experience working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-muted flex items-center justify-center">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <i className="fa-solid fa-user text-2xl text-muted-foreground"></i>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-10 right-10 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors text-3xl focus:outline-none"
          aria-label="Add Testimonial"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </button>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="bg-card rounded-lg p-8 shadow-md w-full max-w-xl relative"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-xl text-muted-foreground hover:text-primary focus:outline-none"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-xl font-bold mb-4 text-center">Add Your Testimonial</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 rounded border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="role"
                      placeholder="Your Role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 rounded border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company/Organization"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="content"
                    placeholder="Your Testimonial"
                    value={form.content}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Submit Testimonial'}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 