const express = require("express");
const BookmarkController = require("../controllers/bookmarkController");

const router = express.Router();

router.post("/", BookmarkController.add);
router.delete("/:id", BookmarkController.destroy);

module.exports = router;
