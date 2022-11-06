const express = require("express");
const CategoryController = require("../controllers/categoryController");
const { authenticateAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get("/", CategoryController.index); //get all category
router.post("/", authenticateAdmin, CategoryController.create); //create category
router.get("/:id", CategoryController.find); //get category by id or slug
router.patch("/:id", authenticateAdmin, CategoryController.update); //update category
router.delete("/:id", authenticateAdmin, CategoryController.destroy); //delete category

module.exports = router;
