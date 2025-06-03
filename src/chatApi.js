import axios from "axios";
axios.defaults.baseURL = "http://localhost:4444";
export const setAuthorizeHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getChats = async () => {
  const chats = await axios.get("/chat/allChats");
  console.log(chats);
};

export const login = async (payload) => {
  const token = await axios.post("/auth/login", payload);
  setAuthorizeHeader(token.data.data.accessToken);
};
export const register = async (payload) => {
  const data = await axios.post("/auth/register", payload);
};
export const refresh = async () => {
  const token = await axios.post("/auth/refresh");
  console.log(token.data.data.accessToken);

  setAuthorizeHeader(token.data.data.accessToken);
};

export const createChat = () => {};

export const updateChat = () => {};
