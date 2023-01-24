import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Detail, Loading, Error } from "./";
import { useQuery } from "react-query";
import { fetchAnime } from "../utils/FetchAnime";

const AnimeDetails = () => {
  const { id } = useParams();
  const getDetailAnime = async () => {
    const res = await fetchAnime(`anime/by-id/${id}`);
    return res;
  };
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery(["detailAnimeById", id], getDetailAnime, {
    refetchOnWindowFocus: false,
  });

  return (
    <Box flexDirection={"row"}>
      {isFetching && isLoading && <Loading />}
      {isSuccess && <Detail anime={data} />}
      {isError && <Error />}
    </Box>
  );
};

export default AnimeDetails;
