import { useEffect, useState } from "react";
import { Josse } from "../assets";
import TopBarResponsive from "./TopBarResponsive";

const Topbar = ({ scrollToSection }) => {
  const { homeRef, projectsRef, worksRef, educationRef } = scrollToSection;
  // active menu
  const [active, setActive] = useState("Home");
  const menuItems = [
    { name: "Home", ref: homeRef },
    { name: "Projects", ref: projectsRef },
    { name: "Works", ref: worksRef },
    { name: "Education", ref: educationRef },
  ];
  // scroll ke section
  const handleScrollTo = (ref, name) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActive(name);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      for (let i = 0; i < menuItems.length; i++) {
        const sec = menuItems[i];
        if (sec.ref.current) {
          const top = sec.ref.current.offsetTop;
          const bottom = top + sec.ref.current.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(sec.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // handle responsive
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#3357F4]">
      <div className="m-auto max-w-[1200px]">
        <div className="flex justify-between items-center px-5 h-[80px]">
          {/* logo */}
          <div className="flex gap-5 items-center">
            <img
              src={Josse}
              alt="josse surya pinem"
              className="w-[45px] h-[45px] rounded-full cursor-pointer object-cover"
            />
            <div className="text-white font-bold text-2xl tracking-wider">
              Josse
            </div>
          </div>
          {/* menu */}
          {windowWidth < 768 ? (
            <TopBarResponsive
              menuItems={menuItems}
              onScrollTo={handleScrollTo}
              active={active}
            />
          ) : (
            <div className="flex gap-5 items-center">
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleScrollTo(item.ref, item.name)}
                  className={`text-xl cursor-pointer ${
                    active === item.name
                      ? "text-white font-bold"
                      : "text-slate-300"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
