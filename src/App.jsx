import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-emerald-700">
      {/* Background gradient covering the entire screen */}
      <div className="fixed top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(30,130,76,.4),rgba(0,255,100,0.4))]"></div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <div id="hero"><Hero /></div>
        <div id="about"><AboutMe /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};

export default App;
