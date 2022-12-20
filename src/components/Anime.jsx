import React from "react";
import { Stack, Box } from "@mui/material";
import AnimeCard from "./AnimeCard";

const Anime = ({ dataAnime }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {dataAnime.map((item) => (
        <Box key={item._id}>{item._id && <AnimeCard anime={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Anime;
