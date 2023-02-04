import React from "react";
import { useStateContext } from "../context/contextApi";
import { Box } from "@mui/material";
import { FcNext, FcPrevious } from "react-icons/fc";

const Pagination = () => {
  const { page, nextPage, prevPage } = useStateContext();
  return (
    <Box display={"flex"} className="space-x-4 m-8 flex">
      <button type="button" className="px-2 py-1 rounded-full bg-black/10 cursor-pointer  hover:bg-black/30 dark:bg-white/10 dark:hover:bg-white/20" onClick={prevPage} disabled={page === 1}>
        <FcPrevious className="text-lg" />
      </button>
      <span className="text-sky-500 p-1">{page}</span>
      <button type="button" className="px-2 py-1 rounded-full bg-black/10 cursor-pointer  hover:bg-black/30 dark:bg-white/10 dark:hover:bg-white/20" onClick={nextPage}>
        <FcNext className="text-lg" />
      </button>
    </Box>
  );
};

export default Pagination;
