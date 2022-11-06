const express = require("express");
const ThreadController = require("../controllers/threadController");

const router = express.Router();

router.get("/", ThreadController.index); //get all thread
router.post("/", ThreadController.create); //create thread
router.get("/:id", ThreadController.findById); //get thread by id
router.get("/:slug", ThreadController.findByCategory); //get thread by category slug
router.patch("/:id", ThreadController.update); //update thread
router.delete("/:id", ThreadController.destroy); //delete thread

module.exports = router;
