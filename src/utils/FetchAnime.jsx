import axios from "axios";

const BASE_URL = "https://anime-db.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

export const FetchAnime = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
