import React from "react";
import LightButton from "../../assets/website/LightButton.png";
import DarkButton from "../../assets/website/DarkButton.png";
const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  React.useeffect(() => {});
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 "
      />
      <img
        src={DarkButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};

export default Darkmode;
