import "@/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
