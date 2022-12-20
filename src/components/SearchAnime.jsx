import React, { useState, useEffect } from "react";
import { FetchAnime } from "../utils/FetchAnime";
import { Box, Typography } from "@mui/material";
import Anime from "../components/Anime";
import { useParams } from "react-router-dom";

const SearchAnime = () => {
  const [dataAnime, setDataAnime] = useState([]);
  const { searchAnime } = useParams();

  useEffect(() => {
    FetchAnime(`anime?page=1&size=20&search=${searchAnime}`).then(({ data }) => setDataAnime(data));
  }, [searchAnime]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2} className="dark:text-slate-200 text-black">
        Result
        <span className="text-sky-500 uppercase"> {searchAnime}</span>
      </Typography>

      <Anime dataAnime={dataAnime} />
    </Box>
  );
};

export default SearchAnime;
