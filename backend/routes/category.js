const express = require("express");
const router = express.Router();

// controller madhala fact create user use karane

router.post("/", require("../controllers/category").createCategory);
// read all data

router.get("/", require("../controllers/category").getAllCategory);
// read one person data

router.get("/:userID", require("../controllers/category").getCategory);
// delete one person data
router.delete("/:userID", require("../controllers/category").deleteCategory);

// update one person data
router.put("/:userID", require("../controllers/category").updateCategory);

module.exports = router;