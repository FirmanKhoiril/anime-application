import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchAnime } from "../utils/FetchAnime";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Error, Loading } from "../components";
const AllGenres = () => {
  const { genreOne, genreTwo } = useParams();

  const categoriesGenres = async (pageParam = 1) => {
    const data = await fetchAnime(`anime?page=${pageParam}&size=21&genres=${genreOne},${genreTwo}&sortBy=ranking&sortOrder=asc`);
    return data;
  };

  const { data, hasNextPage, isLoading, isFetching, isError, isSuccess, error, fetchNextPage } = useInfiniteQuery(["categories", genreOne, genreTwo], categoriesGenres, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.meta?.page < lastPage.meta?.totalPage) return lastPage?.meta?.page + 1;
      return false;
    },
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    staleTime: 10 * (60 * 1000),
  });
  return (
    <Container className="dark:text-white h-screen">
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
    </Container>
  );
};

export default AllGenres;
