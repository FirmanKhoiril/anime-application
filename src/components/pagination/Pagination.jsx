import React from "react";
import { Box } from "@mui/material";
import { useStateContext } from "../../context/contextApi";

const Pagination = () => {
  const { nextPage, prevPage, page } = useStateContext();
  return (
    <Box display={"flex"} gap={2} ml={14} my={4} className="dark:text-white">
      <button type="button" className="px-6 rounded-sm hover:bg-sky-500/90 py-1 bg-sky-500 disabled:bg-sky-500/10" onClick={prevPage} disabled={page == 1 ? true : false}>
        Prev
      </button>
      <span>{page}</span>
      <button type="button" className="px-6 rounded-sm hover:bg-sky-500/90 py-1 bg-sky-500" onClick={nextPage}>
        Next
      </button>
    </Box>
  );
};

export default Pagination;
