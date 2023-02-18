import { Box, Pagination, Container, Stack, Typography } from "@mui/material";
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

  const { data, isSuccess, error, isFetching, isError, isLoading } = useQuery(["anime", genres, page], dataAnime, {
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    keepPreviousData: true,
    staleTime: 10 * (60 * 1000),
  });
  const datas = data?.data?.map((item) => item);
  const totalPage = data?.meta?.totalPage;

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
            <Anime dataAnime={datas} />
            <Container>
              <Pagination
                shape={"rounded"}
                size="small"
                count={totalPage}
                defaultPage={1}
                sx={{ my: 4, mx: { md: 4 }, backgroundClip: "text", color: "transparent", bgcolor: "#fff" }}
                onChange={(e, value) => setPage(value)}
                color="primary"
              />
              <span className="dark:text-white my-5">
                {page} of {totalPage} pages
              </span>
            </Container>
          </>
        )}
        {isError && <Error errorMessage={error?.message} />}
      </Box>
    </Stack>
  );
};

export default AnimeHome;
