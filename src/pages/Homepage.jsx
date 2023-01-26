import React from "react";
import Anime from "../assets/anime.png";
import Background from "../assets/background.jpg";
import { useStateContext } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
const instagram = "https://www.instagram.com/firman.khoiril/";

const Homepage = () => {
  const navigate = useNavigate();
  const { setLogin } = useStateContext();
  const standar = "text-2xl md:text-4xl ";

  const toHomepage = () => {
    setLogin((prev) => !prev);
    navigate("/anime");
  };

  return (
    <div className="h-full relative overflow-hidden -mt-[64px] md:-mt-[72px]">
      <div className="flex items-center justify-evenly md:justify-around md:flex-row flex-col bg-black/40 h-screen text-white">
        <img src={Background} alt="Background" className="h-screen bg-no-repeat bg-cover bg-center relative w-full" />
        <div className="absolute top-[70px] sm:top-32 md:top-[450px] md:left-40">
          <h1 className={`${standar}`}>Welcome To Our Anime Application</h1>
          <h2 className="text-lg md:text-2xl text-center md:text-left ">Make Sure To Enjoy!</h2>
          <p className="text-gray-300"> thank you for visiting my website</p>
          <p className="text-sm tracking-wide md:text-left text-center">
            <span>Created By </span>
            <a href={instagram} target="_blank" className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500 border-b border-white via-pink-500">
              Firman Khoiril Rohmatullah
            </a>
          </p>
        </div>
        <div className="flex flex-col md:mt-0 sm:mt-40 mt-[200px] xs:mt-[220px] md:right-56 absolute ">
          <img src={Anime} alt="Anime" className="h-[300px] md:h-96 w-62 mb-" />
          <button className={`text-xl bg-black/60 px-4 py-3 hover:bg-black/80 rounded-sm`} onClick={toHomepage}>
            Explore Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
