import React from "react";
import { useQuery } from "react-query";
import { fetchAnime } from "../utils/FetchAnime";
import { Pagination, Box } from "@mui/material";
import { Anime, Loading, Error } from "../components";
import { useStateContext } from "../context/contextApi";

const RelatedAnime = ({ related }) => {
  const { setPage, page } = useStateContext();
  const relatedAnime = async () => {
    const res = await fetchAnime(`anime?page=${page}&size=12&search=${related}`);
    return res;
  };

  const { data, isSuccess, error, isFetching, isError, isLoading } = useQuery(["relatedAnime", related, page], relatedAnime, {
    refetchOnWindowFocus: false,
  });
  const datas = data?.data?.map((item) => item);
  const totalPage = data?.meta?.totalPage;

  return (
    <>
      <h2 className="text-center text-2xl dark:text-white font-sans">Related Anime</h2>
      <Box sx={{ display: "flex", mt: 2, flexDirection: "column", gap: 4 }}>
        {isSuccess && (
          <>
            <Anime dataAnime={datas} />
            <Pagination
              shape={"rounded"}
              showFirstButton={"true"}
              showLastButton={"true"}
              count={totalPage}
              defaultPage={page}
              sx={{ my: 4, mx: { md: 4 }, backgroundClip: "text", color: "transparent", bgcolor: "#fff" }}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </>
        )}
        <div className="mx-3">
          {isFetching && isLoading && <Loading />}
          {isError && <Error errorMessage={error?.message} />}
        </div>
      </Box>
    </>
  );
};

export default RelatedAnime;
