import React from "react";
import { Stack, Box } from "@mui/material";
import { AnimeCard } from "./";

const Anime = ({ dataAnime }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {dataAnime?.map((anime) => (
        <Box>{anime._id && <AnimeCard anime={anime} />}</Box>
      ))}
    </Stack>
  );
};

export default Anime;
