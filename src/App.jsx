import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-4">
      <Navbar />
      <Hero />
      <AboutMe/>
    </div>
  );
}

export default App;
