import React from "react";
import Anime from "../assets/hehe.jpg";
import Background from "../assets/detail.jpg";
import { useStateContext } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
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
    <div className="h-screen bg-gradient-to-bl  from-desert via-desert/70 to-desert flex md:flex-row flex-col overflow-hidden">
      <div className="w-full md:w-[65%] h-[40%] md:h-full">
        <img src={Background} alt="Background cute anime" className="w-full h-full" />
      </div>
      <div className=" w-[98%] flex justify-center items-center md:h-full h-[60%] m-1 md:m-2 relative">
        <div />
        <Box
          sx={{ display: "flex", height: { md: 600, xs: 400 }, width: { lg: 700, md: 500, xs: 480 }, flexDirection: "column", justifyContent: "center", alignItems: "center", px: { lg: 12, xs: 4 } }}
          className="bg-white/20 md:skew-x-[5deg] md:translate-x-4 md:hover:skew-y-0  hover:translate-x-0 rounded-3xl  font-mono tracking-wide transition duration-500 md:hover:shadow-2xl hover:-skew-x-1 space-y-2"
        >
          <h4 className=" text-xl md:text-3xl pb-10">Welcome To Anime Lovers !</h4>
          <p>
            This App Familiar with MyAnimeList Website, This is Biggest Website Project{" "}
            <a className=" cursor-pointer  text-black/70 hover:text-black underline " href={instagram} target="_blank">
              i
            </a>{" "}
            created With many differents Technology from Zero to Hero . And
          </p>
          <p className="pb-2">Make sure to enjoy Exploring the Anime app 😁!</p>
          <button className="bg-desert py-3 transition duration-300 rounded-md px-4 hover:shadow-xl" onClick={toHomepage}>
            Let's Explore :)
          </button>
        </Box>
      </div>
    </div>
  );
};

export default Homepage;
