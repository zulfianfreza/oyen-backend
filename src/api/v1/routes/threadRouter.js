const express = require("express");
const ThreadController = require("../controllers/threadController");
const { authenticateUser } = require("../middlewares/auth");

const router = express.Router();

router.get("/", ThreadController.index); //get all thread
router.post("/", authenticateUser, ThreadController.create); //create thread
router.get("/:id", ThreadController.findById); //get thread by id
router.get("/category/:slug_category", ThreadController.findByCategory); //get thread by category slug
router.patch("/:id", ThreadController.update); //update thread
router.delete("/:id", ThreadController.destroy); //delete thread

module.exports = router;
