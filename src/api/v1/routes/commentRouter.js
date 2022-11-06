const express = require("express");
const CommentController = require("../controllers/commentController");

const router = express.Router();

router.post("/", CommentController.add);
router.delete("/:id", CommentController.destroy);

module.exports = router;