import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchAnime } from "../utils/FetchAnime";
import Detail from "./Detail";

const AnimeDetails = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchAnime(`anime/by-id/${id}`).then((data) => setDetail(data));
  }, [id]);

  return (
    <Box flexDirection={"row"}>
      <Detail detail={detail} />
    </Box>
  );
};

export default AnimeDetails;
