
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Expertise from "./sections/Expertise";
import DevOps from "./sections/DevOps";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import { DateTimeApp } from "./DateTime/dateTimeApp";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Expertise />
      <DevOps />
      <Education />
      <Contact />
    </>
  );
}

export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
      <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-white">
        <Navbar dark={dark} setDark={setDark} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/date" element={<DateTimeApp />} />
          </Routes>
        </main>
      </div>
  );
}
