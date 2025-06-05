import axios from "axios";
const baseURL = "https://test-reenbit-back.onrender.com";
export const setAuthorizeHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getChats = async () => {
  const chats = await axios.get(`${baseURL}/chat/allChats`);
  return chats;
};

export const login = async (payload) => {
  const token = await axios.post(`${baseURL}/auth/login`, payload, {
    withCredentials: true,
  });
  setAuthorizeHeader(token.data.data.accessToken);
};
export const register = async (payload) => {
  const data = await axios.post(`${baseURL}/auth/register`, payload);
};
export const refresh = async () => {
  try {
    const token = await axios.post(
      `${baseURL}/auth/refresh`,
      {},
      { withCredentials: true }
    );
    setAuthorizeHeader(token.data.data.accessToken);
  } catch (e) {}
};

export const createChat = async (payload) => {
  return await axios.post(`${baseURL}/chat/create`, payload);
};

export const updateChat = async (payload) => {
  return await axios.patch(`${baseURL}/chat/update`, payload);
};
export const deleteChat = async (payload) => {
  await axios.delete(`${baseURL}/chat/delete`, payload);
};
export const updateProfile = async (payload) => {
  await axios.patch(`${baseURL}/chat/profileUpdate`, payload);
};
