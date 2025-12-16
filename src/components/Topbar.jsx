import { useEffect, useState } from "react";
import { Josse } from "../assets";
import TopBarResponsive from "./TopBarResponsive";

const Topbar = (props) => {
  const { menuItems, active, setActive } = props;
  // scroll ke section
  const handleScrollTo = (ref, name) => {
    const offsetTop = ref.current?.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    setActive(name);
  };
  const handleScroll = () => {
    const scrollPos = window.scrollY + 80 + 1;
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i].ref.current;
      if (!section) continue;
      if (scrollPos >= section.offsetTop - 300) {
        setActive(menuItems[i].name);
        break;
      }
    }
  };
  useEffect(() => {
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
