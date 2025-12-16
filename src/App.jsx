import { useEffect, useRef, useState } from "react";
import { Topbar, Home, Project, Works, Education } from "./components";
import useSectionObserver from "./hooks/useInObserver";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const worksRef = useRef(null);
  const educationRef = useRef(null);
  const [active, setActive] = useState("");
  const scrollPos = window.scrollY + 80 + 1;
  const menuItems = [
    { name: "Home", ref: homeRef, comp: Home },
    { name: "Projects", ref: projectsRef, comp: Project },
    { name: "Works", ref: worksRef, comp: Works },
    { name: "Education", ref: educationRef, comp: Education },
  ];
  useEffect(() => {
    setActive("Home");
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Topbar
        menuItems={menuItems}
        active={active}
        setActive={setActive}
        scrollPos={scrollPos}
      />
      {menuItems.map((e, i) => (
        <div
          key={i}
          ref={e.ref}
          className={`${
            scrollPos >= e.ref.current?.offsetTop - 300
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-40px]"
          } duration-700 ease-in-out`}
        >
          <e.comp />
        </div>
      ))}
    </div>
  );
}

export default App;
