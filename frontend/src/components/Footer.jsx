import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-8">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Barnik Chakraborty. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kingshere"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/barnik-chakraborty-387360282"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;