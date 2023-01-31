import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoreeal.png";
import { useStateContext } from "../context/contextApi";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const { setLogin, toogle, setToogle } = useStateContext();

  return (
    <div className={`flex items-center sticky top-0 justify-between bg-white dark:bg-dark  drop-shadow-lg z-10 p-3`}>
      <div className="flex items-center space-x-4">
        <div className="p-2 dark:bg-white/10 bg-slate-300 rounded-full" onClick={() => setToogle((prev) => !prev)}>
          {!toogle ? <HiMenuAlt4 className="dark:text-white" /> : <HiX className="dark:text-white" />}
        </div>
        <Link to="/" onClick={() => setLogin(false)}>
          <div className="flex items-center hover:animate-bounce lg:text-xl tracking-tight font-[900] bg-clip-text text-transparent text-base bg-gradient-to-r from-sky-400 to-blue-500 uppercase">
            <img src={Logo} alt="logo Anime" className="w-10 h-8 sm:h-10 sm:w-12 mr-1" />
            <span className="hidden sm:block"> Anime</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
