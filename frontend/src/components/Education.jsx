import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    institution: 'Heritage Institute of Technology, Kolkata',
    duration: '2022 – 2026',
    score: 'CGPA: 8.17 / 10.0',
  },
  {
    degree: 'Higher Secondary – Science',
    institution: 'The Future Foundation School',
    duration: '2020 – 2022',
    score: 'ISC: 87.5%',
  },
  {
    degree: 'Secondary – Science',
    institution: 'The Future Foundation School',
    duration: '2008 – 2020',
    score: 'ICSE: 92.8%',
  },
];

const achievements = [
  'Presented research paper "Automated Smart Irrigation System Using IoT-Enabled Autonomous Vehicle with Predictive Analytics" at CICBA-2025',
  '2nd Runner-Up at Hack Heritage',
  'Team Lead in 5 hackathons including NIT Rourkela and Jadavpur University',
];

const Education = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950" id="education">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400">Academic background and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-cyan-400 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>{edu.duration}</span>
                      <span className="text-blue-300 font-medium">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl border border-cyan-500/30">
                <Award className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Achievements & Recognition
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;