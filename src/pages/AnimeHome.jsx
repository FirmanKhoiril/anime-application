import { Box, Stack, Typography } from "@mui/material";
import { Anime, Error, Genres, Pagination, Loading } from "../components";
import React from "react";
import { fetchAnime } from "../utils/FetchAnime";
import { useQuery } from "react-query";
import { useStateContext } from "../context/contextApi";

const AnimeHome = () => {
  const { genres, page } = useStateContext();

  const dataAnime = async () => {
    const response = await fetchAnime(`anime?page=${page}&size=20&genres=${genres}`);

    return response;
  };

  const { data, isSuccess, isFetching, isError, isLoading } = useQuery(["anime", genres, page], dataAnime, {
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    staleTime: 10 * (60 * 1000),
  });
  const datas = data?.data?.map((item) => item);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "94vh" }, px: { sx: 0, md: 2 } }} className="border-r dark:border-white/10 border-black/10">
        <Genres />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography className="dark:text-white" variant="h6" fontWeight="bold" mb={2}>
          {genres}
          <span className="text-sky-500"> Animes</span>
        </Typography>
        {isFetching && isLoading && <Loading />}
        {isSuccess && (
          <>
            <Anime dataAnime={datas} />
            <Pagination />
          </>
        )}
        {isError && <Error />}
      </Box>
    </Stack>
  );
};

export default AnimeHome;