import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const AnimeCard = ({ anime }) => {
  return (
    <Card sx={{ width: { md: "290px", xs: "290px", sm: "100%" } }} className=" md:ml-16 sm:ml-20 xs:ml-10 ml-5   shadow-lg shadow-black/70 hover:scale-[1.01] hover:ease-in transition duration-700 bg-white/10 dark:bg-dark">
      <Link to={`/anime/${anime._id}`}>
        <CardMedia component={"img"} title={anime.title} sx={{ width: { xs: "290px", md: "290px", sm: "100%" }, height: 320 }} image={anime.image} draggable />
      </Link>
      <CardContent className=" bg-white/10 dark:bg-dark h-[100px]">
        <Link to={`/anime/${anime._id}`}>
          <Typography fontWeight={"bold"} variant="subtitle1" className="truncate text-slate-600 dark:text-slate-300">
            {anime.title}
          </Typography>
        </Link>
        <Link to={`/anime/${anime._id}`}>
          <Typography fontWeight={500} variant="subtitle2" className="text-black/90 dark:text-white/80">
            {anime.genres[0]} {anime.genres[1]} {anime.genres[2]} {anime.genres[3]} {anime.genres[4]}
            <LocalFireDepartmentIcon className="text-orange-400" sx={{ ml: "2px", fontSize: 15 }} />
            <LocalFireDepartmentIcon className="text-orange-500" sx={{ ml: "1px", fontSize: 15 }} />
            <LocalFireDepartmentIcon className="text-orange-600" sx={{ ml: "1px", fontSize: 15 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
