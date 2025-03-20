import { Request, Response } from "express";
import { fetchUsers, fetchPosts, fetchComments } from "../services";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;
    const posts = await fetchPosts(userid);
    res.json(posts);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getPostComments = async (req: Request, res: Response) => {
  try {
    const { postid } = req.params;
    const comments = await fetchComments(postid);
    res.json(comments);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};
