import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const TopBarResponsive = ({ menuItems, onScrollTo, active }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {isMenuOpen ? (
        <IoMdClose
          className="text-white text-2xl cursor-pointer"
          onClick={handleToggle}
        />
      ) : (
        <GiHamburgerMenu
          className="text-white text-2xl cursor-pointer"
          onClick={handleToggle}
        />
      )}
      {isMenuOpen && (
        <div className="absolute top-16 right-0">
          <div className="flex flex-col gap-3 items-center shadow-lg rounded-lg bg-white p-4">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className={`text-xl cursor-pointer ${
                  active === item.name
                    ? "font-bold text-[#3357F4]"
                    : "text-slate-500"
                }`}
                onClick={() => {
                  onScrollTo(item.ref, item.name);
                  handleToggle();
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarResponsive;
