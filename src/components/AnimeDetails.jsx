import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Detail, Loading } from "./";

const AnimeDetails = () => {
  const { id } = useParams();

  if (isFetching) return <Loading />;
  if (error) return `error ${error}`;

  return (
    <Box flexDirection={"row"}>
      <Detail anime={data} />
    </Box>
  );
};

export default AnimeDetails;
