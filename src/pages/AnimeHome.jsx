import { Box, Stack, Typography, Pagination } from "@mui/material";
import { Anime, Error, Genres, Loading } from "../components";
import React from "react";
import { fetchAnime } from "../utils/FetchAnime";
import { useQuery } from "react-query";
import { useStateContext } from "../context/contextApi";

const AnimeHome = () => {
  const { genres, page, setPage } = useStateContext();

  const dataAnime = async () => {
    const response = await fetchAnime(`anime?page=${page}&size=21&genres=${genres}`);

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
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} zIndex="10">
        <Typography className="dark:text-white" variant="h6" fontWeight="bold" mb={2}>
          {genres}
          <span className="text-sky-500"> Animes</span>
        </Typography>
        {isFetching && isLoading && <Loading />}
        {isSuccess && (
          <>
            <Anime dataAnime={datas} />
            <Pagination sx={{ my: 4 }} count={15} shape={"rounded"} onChange={(e, value) => setPage(value)} color={"primary"} />
          </>
        )}
        {isError && <Error />}
      </Box>
    </Stack>
  );
};

export default AnimeHome;
