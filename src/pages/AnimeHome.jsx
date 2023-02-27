import { Box, Pagination, Container, Stack, Typography } from "@mui/material";
import { Anime, Error, Genres, Loading } from "../components";
import React from "react";
import { fetchAnime } from "../utils/FetchAnime";
import { useQuery, useInfiniteQuery } from "react-query";
import { useStateContext } from "../context/contextApi";

const AnimeHome = () => {
  const { genres } = useStateContext();

  const dataAnime = async ({ pageParam = 1 }) => {
    const response = await fetchAnime(`anime?page=${pageParam}&size=21&genres=${genres}`);

    return response;
  };

  const { data, isSuccess, isFetching, isError, error, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(["infiniteData", genres], dataAnime, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.meta?.page < lastPage.meta?.totalPage) return lastPage?.meta?.page + 1;
      return false;
    },

    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    staleTime: 10 * (60 * 1000),
  });

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "94vh" }, px: { sx: 0, md: 2 } }}>
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
            {data?.pages?.map((page, i) => (
              <Anime key={i} dataAnime={page?.data} />
            ))}
            {hasNextPage && (
              <Container sx={{ my: 4 }}>
                <button className="py-2 hover:shadow-lg hover:shadow-sky-500/60 bg-sky-500 px-3 rounded-md text-white/80 transition duration-300 " onClick={fetchNextPage}>
                  Load More
                </button>
              </Container>
            )}
          </>
        )}
        {isError && <Error errorMessage={error?.message} />}
      </Box>
    </Stack>
  );
};

export default AnimeHome;
