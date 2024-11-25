import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="mx-4">
      <Navbar />
      <Hero />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
