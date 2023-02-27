import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const AnimeCard = ({ anime }) => {
  return (
    <Card sx={{ width: { md: "300px", xs: "300px" } }} className=" md:ml-16 sm:ml-20 xs:ml-10 ml-5 -z-50  shadow-xl shadow-black/70 dark:shadow-none hover:scale-[1.01] hover:ease-in transition duration-700 bg-white/10 dark:bg-dark">
      <Link to={`/anime/${anime._id}`}>
        <CardMedia component={"img"} title={anime.title} sx={{ width: { xs: "290px", md: "300px", sm: "100%" }, height: 340 }} image={anime.image} draggable />
      </Link>
      <CardContent className=" bg-white/10 dark:bg-dark h-[100px]">
        <Link to={`/anime/${anime._id}`}>
          <Typography fontWeight={"bold"} variant="subtitle1" className="truncate text-slate-600 dark:text-slate-300">
            {anime.title}
          </Typography>
        </Link>
        <Link to={`/anime/${anime._id}`} className="flex flex-wrap space-x-1">
          {anime.genres?.map((item, idx) => (
            <Typography fontWeight={500} variant="subtitle2" className=" text-black/90 dark:text-white/80" key={idx}>
              {item + ","}
            </Typography>
          ))}
        </Link>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
