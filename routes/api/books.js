const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Same as "/api/books"
router.route("/searchBooks")
  .get(booksController.findAll)
  .post(booksController.create);

// Same as "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
