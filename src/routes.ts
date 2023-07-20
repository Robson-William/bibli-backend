import express from "express";

const router = express.Router();

router.use("/");
router.use("/user");
router.use("/library");
router.use("/books");

export default router;
