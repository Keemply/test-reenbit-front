import axios from "axios";

const baseURL = "https://dummyjson.com/quotes";
export const randomQuote = () => {
  return axios.get(`${baseURL}/random`);
};
