import { useRef } from "react";
import { Topbar, Home, Project, Works, Education } from "./components";
import useSectionObserver from "./hooks/useInObserver";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const worksRef = useRef(null);
  const educationRef = useRef(null);
  return (
    <div className="overflow-x-hidden">
      <Topbar
        scrollToSection={{ homeRef, projectsRef, worksRef, educationRef }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
    </div>
  );
}

export default App;
