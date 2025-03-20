import { Router } from "express";
import { getAllUsers, getPostComments, getUserPosts } from "../controllers";

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:userid/posts", getUserPosts);
router.get("/posts/:postid/comments", getPostComments);

export default router;
