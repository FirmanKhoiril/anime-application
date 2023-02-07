import React from "react";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { MdLiveTv } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { RelatedAnime } from "../components";
import { BsCheckAll } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Detail = ({ anime: { _id, title, image, genres, link, ranking, status, synopsis, alternativeTitles, type, episodes } }) => {
  const navigate = useNavigate();

  const handleGenres = ({ item }) => {
    navigate(`/search/${item}`);
  };
  return (
    <>
      <Box minHeight={"95vh"}>
        <Box>
          <div style={{ background: "linear-gradient(90deg, rgba(58,158,180,1) 11%, rgba(29,170,253,1) 49%, rgba(69,120,252,1) 99%)" }} className="z-0 h-[200px] lg:h-[300px]" />
          <CardMedia alt={title} image={image} sx={{ width: 220, height: 320 }} className="flex cursor-pointer  -mt-[120px] m-auto  -z-10 shadow-lg shadow-black rounded-md dark:shadow-white" />
          <CardContent className="text-center font-extrabold dark:text-slate-100 ">{title}</CardContent>
          <Box display={"flex"} p={1} flexDirection="column">
            <Box sx={{ mx: { xs: "40px", md: 0 } }}>
              {_id && (
                <Box className="flex justify-around xs:flex-col flex-col md:flex-row xs:space-y-4  mb-6 lg:mb-8">
                  <Typography variant="body2" className="md:text-center text-gray-700 flex flex-col dark:text-slate-300" fontWeight={500}>
                    Genres :{" "}
                    <div className="flex flex-wrap space-x-2 my-2">
                      {genres.map((item, idx) => (
                        <div className="flex cursor-pointer border hover:bg-sky-500 hover:text-white my-1 rounded-md border-sky-500 px-2 py-1" key={idx} onClick={() => handleGenres({ item })}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </Typography>
                  <Typography variant="body2" className="dark:text-slate-200 mt-4 md:text-center text-gray-700 flex flex-col items-baseline">
                    Alternative Title :{" "}
                    {alternativeTitles.map((item, idx) => (
                      <div className="flex flex-col" key={idx}>
                        - {item}
                      </div>
                    ))}
                  </Typography>
                </Box>
              )}
              <Box display="flex" alignItems={"center"} className="space-x-1 justify-around md:justify-evenly  ">
                <Typography variant="body2" className="text-sky-500 flex flex-row">
                  Ranking : {ranking}
                  <FaMedal className=" text-sm xs:block hidden text-sky-600 mt-[3px] ml-1" />
                </Typography>
                <Typography variant="body2" className="text-slate-600 dark:text-slate-300  ">
                  Episodes: {episodes}
                </Typography>
                <Typography variant="body2" className="text-slate-600 dark:text-slate-300 flex flex-row">
                  Type: {type}
                  <MdLiveTv className="text-sky-500  xs:block hidden text-[17px] ml-1" />
                </Typography>
              </Box>
              <Box className="flex flex-row items-center ml-4 mt-4">
                <Typography variant="body2" marginLeft={1} className=" text-slate-600 dark:text-white/75">
                  Status : <span className="text-sky-500"> {status}</span>
                </Typography>
                <BsCheckAll className="text-lime-500 text-xl ml-1" />
              </Box>
            </Box>
            <CardContent className="dark:text-white ">
              {synopsis}
              <a href={link} target="_blank" className="text-sky-600 font-semibold underline ml-2">
                Official
              </a>
            </CardContent>
          </Box>
        </Box>
      </Box>
      <RelatedAnime related={title} />
    </>
  );
};

export default Detail;
