import React from "react";
import Anime from "../assets/anime.png";
import Background from "../assets/background.jpg";
import { useStateContext } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
const instagram = "https://www.instagram.com/firman.khoiril/";

const Homepage = () => {
  const navigate = useNavigate();
  const { setLogin } = useStateContext();
  const standar = "text-lg sm:text-2xl md:text-4xl ";

  const toHomepage = () => {
    setLogin((prev) => !prev);
    navigate("/anime");
  };

  return (
    <div className="h-full relative overflow-hidden -mt-[64px] sm:-mt-[72px] lg:-mt-[72px]">
      <div className="flex items-center justify-evenly md:justify-around md:flex-row flex-col bg-black/40 h-screen text-white">
        <img src={Background} alt="Background" className="h-screen bg-no-repeat bg-cover bg-center relative w-full" />
        <div className="absolute top-[70px] mt-10 md:mt-3 sm:top-16 lg:top-[450px] md:left-40">
          <h1 className={`${standar} mx-1 font-semibold`}>Welcome To Our Anime Application</h1>
          <p className="text-sm text-gray-300 tracking-wide md:text-left text-center">
            <p className="hidden md:block  text-3xl text-white/80">Still BETA Version</p>
            <span>Created By </span>
            <a
              href={instagram}
              target="_blank"
              className="text-transparent text-[15px] font-bold bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500 hover:border-b hover:border-white via-pink-500 hover:to-fuchsia-500 hover:from-red-500 hover:via-pink-500"
            >
              Firman Khoiril Rohmatullah
            </a>
          </p>
        </div>
        <div className="flex flex-col md:mt-0 sm:mt-20 mt-[180px] xs:mt-[200px] md:right-56 absolute ">
          <img src={Anime} alt="Anime" className="h-[300px] md:mt-20 sm:h-[340px] md:h-96 w-62" />
          <button className={`text-xl bg-black/60 px-3 py-3 hover:bg-black/80 rounded-md`} onClick={toHomepage}>
            Explore Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
