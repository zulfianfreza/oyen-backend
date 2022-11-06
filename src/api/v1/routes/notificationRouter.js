const express = require("express");
const NotificationController = require("../controllers/notificationController");

const router = express.Router();

router.get("/", NotificationController.index);

module.exports = router;
