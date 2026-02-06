import { motion } from 'framer-motion';
import { Code2, Database, Cloud, GitBranch, Cpu, Globe } from 'lucide-react';

const skillsData = [
  // Row 1
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React.js', icon: Globe },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Cpu },
  { name: 'Python', icon: Code2 },
  { name: 'C++', icon: Code2 },
  { name: 'Java', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'Flask', icon: Cpu },
  // Duplicates for seamless loop
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React.js', icon: Globe },
  { name: 'Next.js', icon: Globe },
];

const skillsDataRow2 = [
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'WebRTC', icon: Globe },
  { name: 'WebSockets', icon: Globe },
  { name: 'Socket.IO', icon: Globe },
  { name: 'REST APIs', icon: Cpu },
  { name: 'Prisma', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Postman', icon: Globe },
  // Duplicates for seamless loop
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'WebRTC', icon: Globe },
];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full mx-3">
      <Icon className="h-5 w-5 text-cyan-400" />
      <span className="text-white font-medium whitespace-nowrap">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden" id="skills">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="space-y-6">
          {/* Row 1 - Moving Left */}
          <div className="relative">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {skillsData.map((skill, index) => (
                <SkillCard key={`row1-${index}`} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative">
            <motion.div
              className="flex"
              animate={{
                x: [-1400, 0],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {skillsDataRow2.map((skill, index) => (
                <SkillCard key={`row2-${index}`} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;