import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchPosts = async (userid: string) => {
  const response = await axios.get(`${BASE_URL}/users/${userid}/posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchComments = async (postid: string) => {
  const response = await axios.get(`${BASE_URL}/posts/${postid}/comments`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.data;
};