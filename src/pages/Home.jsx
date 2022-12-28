import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Anime, Loading, Genres } from "../components";
import { useGetGenreListAnimeQuery } from "../utils/FetchAnime";

const Home = () => {
  const [genres, setGenres] = useState("Award Winning");
  const { data, error, isFetching } = useGetGenreListAnimeQuery(genres);

  const instagram = "https://www.instagram.com/firman.khoiril/";

  if (error) return `error: ${error} `;
  const dataAnime = data?.data;
  if (isFetching) return <Loading />;
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "90vh" }, px: { sx: 0, md: 2 } }} className="border-r-2">
        <Genres genres={genres} setGenres={setGenres} />

        <Typography variant="body2" sx={{ mt: 1.35 }} className="hidden lg:block dark:text-slate-300 text-gray-600">
          @Copyright 2022 By
          <a href={instagram} target="_blank" className="text-sky-500">
            Firman
          </a>
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography className="dark:text-white" variant="h6" fontWeight="bold" mb={2}>
          {genres}
          <span className="text-sky-500"> Animes</span>
        </Typography>

        <Anime dataAnime={dataAnime} />
      </Box>
    </Stack>
  );
};

export default Home;
