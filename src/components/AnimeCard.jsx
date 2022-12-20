import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const AnimeCard = ({ anime: { _id }, anime: { genres }, anime }) => {
  return (
    <Card sx={{ width: { md: "290px", xs: "290px", sm: "100%" }, boxShadow: "none", borderRadius: 0, m: "auto" }}>
      <Link to={`/anime/${_id}`}>
        <CardMedia component={"img"} title={anime.title} sx={{ width: { xs: "290px", md: "290px" }, height: 370 }} image={anime.image} />
      </Link>
      <CardContent className="bg-[#1e1e1e] h-[106px]">
        <Link to={`/anime/${_id}`}>
          <Typography fontWeight={"bold"} variant="subtitle1" className="truncate" sx={{ color: "white" }}>
            {anime.title}
          </Typography>
        </Link>
        <Link to={`/anime/${_id}`}>
          <Typography fontWeight={500} variant="subtitle2" sx={{ color: "whitesmoke" }}>
            {genres[0]} {genres[1]} {genres[2]} {genres[3]} {genres[4]}
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
