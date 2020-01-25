const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/searchBooks", bookRoutes);

module.exports = router;