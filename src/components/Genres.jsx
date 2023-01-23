import React from "react";
import { Stack } from "@mui/material";
import { DummyData } from "../utils/DummyData";
import { useStateContext } from "../context/contextApi";

const Genres = () => {
  const { genres, setGenres } = useStateContext();
  return (
    <Stack direction={"row"} sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
      {DummyData.map((anime) => (
        <button
          onClick={() => setGenres(anime.name)}
          key={anime.name}
          className={` md:m-[10px] my-4 mx-1 font-[500] flex justify-start items-center cursor-pointer bg-transparent outline-none border-none py-0 md:py-[-4px] lg:py-2 px-4 transition-all duration-[400ms] ease-in bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 rounded-2xl md:rounded-full hover:text-white dark:text-slate-400/80 dark:hover:text-white ${
            anime.name === genres && "bg-sky-500 text-white dark:text-black"
          } `}
        >
          <span className={`mr-2  text-xl ${anime.name === genres ? "text-white" : "text-sky-400"}`}>{anime.icon}</span>
          <span className=" text-[10px] uppercase md:capitalize break-words md:text-base">{anime.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Genres;
