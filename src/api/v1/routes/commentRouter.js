const express = require("express");
const CommentController = require("../controllers/commentController");
const { authenticateUser } = require("../middlewares/auth");

const router = express.Router();

router.get("/:id", CommentController.getComment);
router.post("/:thread_id", authenticateUser, CommentController.addComment);
router.patch(
    "/reply/:comment_id",
    authenticateUser,
    CommentController.addReply
);
router.delete("/:id", authenticateUser, CommentController.destroyComment);
router.delete("/reply/:id", authenticateUser, CommentController.destroyReply);

module.exports = router;
