import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
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
    content: "Kelechi's expertise in full-stack development helped us build a robust and scalable application. His contributions were invaluable."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
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
        </div>
      </div>
    </section>
  );
} 