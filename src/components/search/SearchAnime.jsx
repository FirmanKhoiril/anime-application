import React from "react";
import { Box, Typography } from "@mui/material";
import { Anime, Loading } from "..";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useStateContext } from "../../context/contextApi";

const SearchAnime = () => {
  const { searchAnime } = useParams();
  const { page, genres } = useStateContext();

  const dataSearchAnime = async () => {
    const response = await fetchAnime(`anime?page=${page}&size=20&search=${searchAnime}`);

    return response;
  };

  const { data, isSuccess, isFetching, isError, isLoading, error } = useQuery(["anime", genres], dataSearchAnime, {
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
  });
  const datas = data?.data?.map((item) => item);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2} className="dark:text-slate-200 text-black">
        Result for :<span className="text-sky-500 capitalize"> {searchAnime}</span>
      </Typography>
      {isFetching && isLoading && <Loading />}
      {isSuccess && <Anime dataAnime={datas} />}
      {isError && <Error />}
    </Box>
  );
};

export default SearchAnime;
