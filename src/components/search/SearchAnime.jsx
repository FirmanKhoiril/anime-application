import React from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { Anime, Loading, Error, SearchBar } from "..";
import { useParams } from "react-router-dom";
import { fetchAnime } from "../../utils/FetchAnime";
import { useQuery } from "react-query";
import { useStateContext } from "../../context/contextApi";

const SearchAnime = () => {
  const { searchAnime } = useParams();
  const { page, dark, setPage } = useStateContext();

  const dataSearchAnime = async () => {
    const response = await fetchAnime(`anime?page=${page}&size=20&search=${searchAnime}`);

    return response;
  };

  const { data, isSuccess, isFetching, isError, isLoading } = useQuery(["searchAnime", searchAnime, page], dataSearchAnime, {
    refetchOnWindowFocus: false,
    staleTime: 10 + 60 * 1000,
  });
  const datas = data?.data?.map((item) => item);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "100%", flex: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={2} className="dark:text-slate-200 text-black text-center">
        Result for :<span className="text-sky-500 capitalize"> {searchAnime}</span>
      </Typography>

      {isFetching && isLoading && <Loading />}
      {isSuccess && (
        <>
          <div className="flex justify-center mb-10">
            <SearchBar />
          </div>

          <Anime dataAnime={datas} />
          <Pagination count={5} sx={{ my: 4 }} defaultPage={1} onChange={(e, value) => setPage(value)} color="primary" />
        </>
      )}
      {isError && <Error />}
    </Box>
  );
};

export default SearchAnime;
