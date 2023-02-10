import React from "react";
import { Box, Pagination, Container, Typography } from "@mui/material";
import { Anime, Loading, Error, SearchBar } from "..";
import { useParams } from "react-router-dom";
import { fetchAnime } from "../../utils/FetchAnime";
import { useQuery } from "react-query";
import { useStateContext } from "../../context/contextApi";

const SearchAnime = () => {
  const { searchAnime } = useParams();
  const { setPage, page } = useStateContext();

  const dataSearchAnime = async () => {
    const response = await fetchAnime(`anime?page=${page}&size=20&search=${searchAnime}`);

    return response;
  };

  const { data, isSuccess, isFetching, error, isError, isLoading } = useQuery(["searchAnime", searchAnime, page], dataSearchAnime, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
  const datas = data?.data?.map((item) => item);
  const totalPage = data?.meta?.totalPage;

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
          <Container sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "row" }, flexWrap: "wrap" }}>
            <Pagination
              shape={"rounded"}
              showFirstButton="true"
              showLastButton="true"
              count={totalPage}
              defaultPage={page}
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
      {isError && (
        <>
          <Error errorMessage={error?.message} />
        </>
      )}
    </Box>
  );
};

export default SearchAnime;
