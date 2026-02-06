import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Indian Institute of Technology, Bombay',
    role: 'Research Intern - Translation Pipeline for Indian Languages',
    duration: 'July 2025 - October 2025',
    responsibilities: [
      'Contributed to the Udaan initiative under the Prime Minister\'s Office, enabling large-scale translation of educational content into regional Indian languages.',
      'Analyzed and optimized translation pipelines, improving translation accuracy and system stability.',
    ],
  },
  {
    company: 'Retar Mediserve',
    role: 'Full Stack Developer Intern',
    duration: 'June 2025 - July 2025',
    responsibilities: [
      'Developed a production-grade hotel booking platform using Next.js, supporting authentication, room selection, and real-time availability with SEO-optimized server-side rendering.',
      'Built a scalable admin dashboard to manage bookings and user activity across multiple hotel clients, improving system reliability and performance.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900" id="experience">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-400">Professional journey and contributions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-cyan-500/30">
                  <Briefcase className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-cyan-400 mb-3">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-3">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;