import React from "react";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { MdLiveTv } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const Detail = ({ anime: { _id, title, image, genres, link, ranking, status, synopsis, alternativeTitles, type, episodes } }) => {
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{ background: "linear-gradient(90deg, rgba(58,158,180,1) 11%, rgba(29,170,253,1) 49%, rgba(69,120,252,1) 99%)" }} className="z-0 h-[200px] lg:h-[300px]" />
        <CardMedia alt={title} image={image} sx={{ width: 220, height: 320 }} className="flex -mt-[120px] m-auto  -z-10 shadow-lg shadow-black rounded-md dark:shadow-white" />
        <CardContent className="text-center font-extrabold dark:text-slate-100 ">{title}</CardContent>
        <Box display={"flex"} p={2} flexDirection="column">
          <Box sx={{ mr: { sm: "100px", md: 0 } }}>
            {_id && (
              <Box className="flex justify-around  mb-6 lg:mb-8">
                <Typography variant="body2" className="md:text-center text-gray-700 flex flex-col dark:text-slate-300 items-baseline" fontWeight={500}>
                  Genres :<span>{genres[0]}</span>
                  <span>{genres[1]}</span>
                  <span>{genres[2]}</span>
                  <span>{genres[3]}</span>
                  <span>{genres[4]}</span>
                </Typography>
                <Typography variant="body2" className="dark:text-slate-200 md:text-center text-gray-700 flex flex-col items-baseline">
                  Alternative Title :<span>- {alternativeTitles[0]}</span>
                  <span>- {alternativeTitles[1]}</span>
                  <span>- {alternativeTitles[2]}</span>
                  <span>- {alternativeTitles[3]}</span>
                </Typography>
              </Box>
            )}
            <Box display="flex" alignItems={"center"} className="flex-row space-x-2 justify-around md:justify-evenly  ">
              <Typography variant="body2" className="text-sky-500 flex flex-row">
                Ranking : {ranking}
                <FaMedal className="text-md text-sky-600 mt-[3px] ml-1" />
              </Typography>
              <Typography variant="body2" className="text-slate-600 dark:text-slate-300  ">
                Episodes: {episodes}
                <LocalFireDepartmentIcon className="text-orange-500" />
              </Typography>
              <Typography variant="body2" className="text-slate-600 dark:text-slate-300 flex flex-row">
                Type: {type}
                <MdLiveTv className="text-sky-500 text-lg ml-1" />
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
            {synopsis}{" "}
            <a href={link} target="_blank" className="text-sky-600 font-semibold underline">
              Detail Anime
            </a>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
