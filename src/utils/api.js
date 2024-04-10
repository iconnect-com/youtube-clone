import axios from "axios";

// const BASE_URL = "yt-api.p.rapidapi.com";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const default_api_key = process.env.API_KEY;

const dataFromApi = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":
      default_api_key || "284873ab7cmsh4d964abd73ca936p1782ebjsn42d8c123fef3",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, dataFromApi);
  return data;
};
