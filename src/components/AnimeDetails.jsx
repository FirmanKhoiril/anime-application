import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Detail, Loading } from "./";
import { useGetDetailsAnimeQuery } from "../utils/FetchAnime";

const AnimeDetails = () => {
  const { id } = useParams();

  const { data, error, isFetching } = useGetDetailsAnimeQuery(id);
  if (isFetching) return <Loading />;
  if (error) return `error ${error}`;

  return (
    <Box flexDirection={"row"}>
      <Detail anime={data} />
    </Box>
  );
};

export default AnimeDetails;
