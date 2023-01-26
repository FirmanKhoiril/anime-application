import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logoreeal.png";
import { SearchBar } from "./";
import { useStateContext } from "../context/contextApi";

const Navbar = () => {
  const { login, setLogin } = useStateContext();
  return (
    <Stack direction="row" className={`items-center sticky top-0 justify-between ${!login ? "bg-black/10" : "bg-white/80 dark:bg-[#20232A]"}  drop-shadow-lg z-50 `} p={2}>
      <Link to="/" className="flex items-center" onClick={() => setLogin(false)}>
        <p className="flex items-center hover:animate-bounce lg:text-xl tracking-tight font-[900] bg-clip-text text-transparent text-base bg-gradient-to-r from-sky-400 to-blue-500 uppercase">
          <img src={Logo} alt="logo Anime" className="w-10 h-8 sm:h-10 sm:w-12 mr-1" />
          <span className="hidden sm:block"> Anime</span>
        </p>
      </Link>
      {login && <SearchBar />}
    </Stack>
  );
};

export default Navbar;
