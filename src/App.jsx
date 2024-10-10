import React, { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/LoadingSpinner";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen">
      <Suspense
        className={
          <div className="flex justify-center items-center min-h-screen">
            <LoadingSpinner />
          </div>
        }
      >
        <div>
          <div className="bg-primary pt-4">
            <NavBar />
            <Hero />
          </div>
          <SkillsSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
