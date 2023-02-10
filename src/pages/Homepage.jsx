import React from "react";
import Anime from "../assets/anime.png";
import Background from "../assets/test.jpg";
import { useStateContext } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
const instagram = "https://www.instagram.com/firman.khoiril/";

const Homepage = () => {
  const navigate = useNavigate();
  const { setLogin } = useStateContext();
  const standar = "text-2xl sm:text-3xl md:text-[50px] ";

  const toHomepage = () => {
    setLogin((prev) => !prev);
    navigate("/anime");
  };

  return (
    <div className="h-screen relative overflow-hidden ">
      <div className="flex items-center justify-evenly md:justify-around md:flex-row flex-col h-screen text-white">
        <img src={Background} alt="background" className="h-screen relative w-full " />
        <div className="absolute top-[70px] mt-6 md:mt-3 sm:top-16 lg:top-[400px] md:left-40">
          <h1 className={`${standar} mx-1 font-extrabold sm:font-semibold`}>
            Welcome To <span className={`bg-gradient-to-r text-transparent  from-sky-500 bg-clip-text via-purple-500  to-blue-500 ${standar}`}>Anime Lovers</span>{" "}
          </h1>
          <div className="text-sm mt-0 md:mt-10 text-gray-300 tracking-wide md:text-left text-center">
            <span>Created By </span>
            <a
              href={instagram}
              target="_blank"
              className="text-transparent text-[15px] font-bold bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500 hover:border-b hover:border-white via-pink-500 hover:to-fuchsia-500 hover:from-red-500 hover:via-pink-500"
            >
              Firman Khoiril Rohmatullah
            </a>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 sm:mt-20 mt-[180px] xs:mt-[200px] md:right-56 absolute ">
          <img src={Anime} alt="Anime" className="h-[270px] md:mt-20 sm:h-[300px] md:h-96 w-62" />
          <button className={`text-xl bg-black/60 px-3 py-3 hover:bg-black/80 rounded-md`} onClick={toHomepage}>
            Explore Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
