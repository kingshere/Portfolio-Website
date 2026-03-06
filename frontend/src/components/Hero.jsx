import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6">
              Barnik Chakraborty
            </h1>
            <p className="text-2xl sm:text-3xl font-light text-cyan-400 mb-8">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I am a passionate Full Stack Developer with a Bachelor of Technology in Computer Science and Engineering. 
            I have hands-on experience in developing web applications along with significant involvement in innovative 
            projects such as collaborative platforms and smart irrigation systems. I am eager to leverage my skills to 
            contribute to impactful technology solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
           <Button
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/40"
  asChild
>
  {/* Note: the 'download' attribute only works for same-origin files, 
      but the modified Google Drive URL handles the download trigger itself. */}
  <a
    href="https://drive.google.com/uc?export=download&id=1HlkFAtwjDZ2HocjXS3VsL8hXq9CHxSK6"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </a>
</Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/kingshere" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/barnik-chakraborty-387360282" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="mx-auto h-6 w-6 text-cyan-500 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
