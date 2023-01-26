import React from "react";
import Anime from "../assets/anime.png";
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
    <div className="h-full -mt-[64px] md:-mt-[72px]">
      <div className="hero h-full bg-no-repeat bg-cover bg-center">
        <div className="flex items-center justify-evenly md:justify-around md:flex-row flex-col bg-black/40 h-screen text-white">
          <div className="">
            <h1 className={`${standar}`}>Welcome To Our Anime Application</h1>
            <h2 className="text-lg md:text-2xl text-center md:text-left ">Make Sure To Enjoy!</h2>
            <p className="text-gray-300"> thank you for visiting my website</p>
            <p className="text-sm tracking-wide">
              <span>Created By </span>
              <a href={instagram} target="_blank" className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500 via-pink-500">
                Firman Khoiril Rohmatullah
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <img src={Anime} alt="Anime" className="h-96 w-62 mb-" />
            <button className={`text-xl bg-black/60 px-4 py-3 hover:bg-black/80 rounded-sm`} onClick={toHomepage}>
              Explore Now !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
