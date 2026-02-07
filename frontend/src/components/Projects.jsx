import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'WireDrop',
    description: 'WireDrop is a secure, browser-based peer-to-peer file sharing application that enables direct file transfers between users without server-side storage. Built using WebRTC DataChannels and WebSockets for signaling, WireDrop delivers fast, private, and reliable file sharing entirely within the browser.',
    techStack: ['React', 'TypeScript', 'WebRTC', 'WebSockets', 'Node.js'],
    github: 'https://github.com/kingshere/WireDrop',
  },
  {
    title: 'Gen-Collab',
    description: 'GEN-COLLAB is a comprehensive communication platform that combines real-time messaging, video conferencing, and collaborative whiteboarding. Built with modern technologies and a focus on user experience, it offers a seamless integration of multiple communication channels in one unified interface.',
    techStack: ['Next.js', 'TypeScript', 'Socket.IO', 'WebRTC', 'Prisma'],
    github: 'https://github.com/kingshere/Gen-Canvas',
  },
  {
    title: 'Serverless Image Resizer',
    description: 'This project automates image resizing using a serverless architecture powered by AWS Lambda and S3. When an image is uploaded to a source S3 bucket, it automatically triggers a Lambda function that resizes the image and stores the output in a destination bucket.',
    techStack: ['AWS S3', 'AWS Lambda', 'Pillow', 'AWS CloudWatch'],
    github: 'https://github.com/kingshere/image_resizer_serverless',
  },
  {
    title: 'Agentic AI Writing Companion',
    description: 'A modern AI-powered chat application built with Stream Chat, OpenAI, and web search capabilities. This full-stack application provides an intelligent writing assistant that can help with content creation, research, and real-time collaboration.',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    github: 'https://github.com/kingshere/AI-CHAT-APP-WITH-AGENTS',
  },
  {
    title:'Translation Microservice',
    description: 'A lightweight, modular, and scalable translation microservice built with FastAPI to provide text translation capabilities. The service currently uses a mock translation system but is designed to integrate seamlessly with the Google Translate API for production use. It supports single and bulk text translations, comprehensive logging, and a health check endpoint for monitoring.',
    techStack: ['FastAPI', 'Python', 'SQLite', 'Pydantic'],
    github: 'https://github.com/kingshere/Translation-Microservice-Assignment',
  },

    {
    title:'GRC Scanner',
    description: 'A comprehensive web application security assessment tool that identifies vulnerabilities, analyzes security headers, and generates detailed compliance reports.',
    techStack: ['Flask','React', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'ReactJS'],
    github: 'https://github.com/kingshere/GRC-Scanner',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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