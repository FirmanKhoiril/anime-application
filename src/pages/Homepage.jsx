import React from "react";
import Background from "../assets/reals.jpg";
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
    <div className="md:h-screen h-full flex lg:flex-row flex-col w-full overflow-hidden ">
      <div className="lg:w-[45%] h-[90%] lg:h-full md:h-[50%]">
        <div className="w-full h-[90%] md:h-full">
          <img src={Background} alt="background" className="h-full w-full" />
        </div>
      </div>
      <div className="lg:w-[65%] px-4 flex-col flex md:items-center bg-black/90 py-10 h-full md:h-screen">
        <p className="text-slate-200 bg-black/10">
          Created By{" "}
          <a href={instagram} target="_blank" className="text-sky-500">
            {" "}
            Firman Khoiril
          </a>{" "}
        </p>
        <div className="bg-white/10 flex flex-col mx-auto items-center justify-center h-[25%] w-80 text-white ">
          <div className="flex flex-col py-4 w-full h-full m-auto">
            <button className="py-2 px-4 m-2 bg-white text-black hover:bg-white/90 font-bold rounded-sm">Sign In</button>
            <button className="py-2 px-4 m-2 bg-white text-black hover:bg-white/90 font-bold rounded-sm">Sign Up</button>
            <button className="py-2 px-4 m-2 border border-sky-500 hover:bg-sky-500  font-semibold rounded-sm" onClick={toHomepage}>
              Explore App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
