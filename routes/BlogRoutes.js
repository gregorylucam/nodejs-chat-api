const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs)
router.route("/").post(createBlog);
router.route("/:id").get(getBlogById)
router.route("/:id").put(updateBlog)
router.route("/:id").delete(deleteBlog);

module.exports = router;
