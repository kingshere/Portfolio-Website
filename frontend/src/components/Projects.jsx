import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'WireDrop',
    description: 'Architected a serverless peer-to-peer file transfer system using WebRTC DataChannels with WebSocket-based signaling, eliminating server-side storage and minimizing end-to-end transfer latency. Implemented chunked binary streaming, adaptive backpressure, and congestion-aware retransmission to ensure reliable large-file transfers with stable throughput and low memory overhead.',
    techStack: ['React', 'TypeScript', 'WebRTC', 'WebSockets', 'Node.js'],
    github: 'https://github.com/kingshere',
  },
  {
    title: 'Gen-Collab',
    description: 'Engineered a distributed real-time collaboration platform enabling multi-user whiteboarding, messaging, and video communication with low-latency event propagation and deterministic client-state synchronization. Built a secure, scalable backend with role-based access control, invite-based onboarding, and authenticated sessions, optimized via batched message retrieval for real-time edit and delete consistency.',
    techStack: ['Next.js', 'TypeScript', 'Socket.IO', 'WebRTC', 'Prisma'],
    github: 'https://github.com/kingshere',
  },
  {
    title: 'Agentic AI Writing Companion',
    description: 'Architected an agentic AI system with multi-agent orchestration, tool-augmented reasoning, and streaming inference to support low-latency, concurrent user interactions. Designed a stateful agent lifecycle and concurrency control layer to manage agent execution, tool invocation, and response streaming, improving determinism and system stability.',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    github: 'https://github.com/kingshere',
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-slate-900" id="projects">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">Building scalable and impactful solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;