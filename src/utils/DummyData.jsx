import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { RiSwordLine, RiGhost2Line, RiEmotionLaughLine } from "react-icons/ri";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ForestIcon from "@mui/icons-material/Forest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdMovieCreation } from "react-icons/md";
import { GiGhost, GiMountainClimbing, GiChemicalTank, GiLoveLetter, GiEvilBook } from "react-icons/gi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Adult = () => <p>18++</p>;

export const DummyData = [
  { name: "Award Winning", icon: <EmojiEventsIcon /> },
  { name: "Action", icon: <RiSwordLine /> },
  { name: "Suspense", icon: <HelpOutlineIcon /> },
  { name: "Horror", icon: <GiGhost /> },
  { name: "Ecchi", icon: <FavoriteBorderIcon /> },
  { name: "Avant Garde", icon: <MdMovieCreation /> },
  { name: "Sports", icon: <ScoreboardIcon /> },
  { name: "Supernatural", icon: <GiEvilBook /> },
  { name: "Fantasy", icon: <ForestIcon /> },
  { name: "Gourmet", icon: <RestaurantMenuIcon /> },
  { name: "Boys Love", icon: <FavoriteBorderIcon /> },
  { name: "Drama", icon: <LiveTvIcon /> },
  { name: "Comedy", icon: <RiEmotionLaughLine /> },
  { name: "Mystery", icon: <RiGhost2Line /> },
  { name: "Girls Love", icon: <FavoriteBorderIcon /> },
  { name: "Slice of Life", icon: <LiveTvIcon /> },
  { name: "Adventure", icon: <GiMountainClimbing /> },
  { name: "Romance", icon: <GiLoveLetter /> },
  { name: "Sci-Fi", icon: <GiChemicalTank /> },
  { name: "Erotica", icon: <Adult /> },
  { name: "Hentai", icon: <Adult /> },
];

export const Skill = [
  { name: "HTML", icon: <AiFillHtml5 /> },
  { name: "CSS", icon: <FaReact /> },
  { name: "Javascript", icon: <FaReact /> },
  { name: "Boostrap", icon: <FaReact /> },
  { name: "Tailwind", icon: <FaReact /> },
  { name: "React Js", icon: <FaReact /> },
  { name: "Next Js", icon: <FaReact /> },
  { name: "Node Js", icon: <FaReact /> },
];
