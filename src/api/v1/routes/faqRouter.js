const express = require("express");
const FaqController = require("../controllers/faqController");

const router = express.Router();

router.get("/", FaqController.index);
router.post("/", FaqController.create);
router.get("/:id", FaqController.find);
router.patch("/:id", FaqController.update);
router.delete("/:id", FaqController.destroy);

module.exports = router;
