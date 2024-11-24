import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"

function App() {
  return (
    <div className="mx-4">
      <Navbar />
      <Hero />
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
