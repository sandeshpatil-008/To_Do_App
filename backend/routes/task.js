const express = require("express");
const router = express.Router();

// controller madhala fact create user use karane

router.post("/", require("../controllers/task").createTask);
// read all data

router.get("/", require("../controllers/task").getAllTask);
// read one person data

router.get("/:userID", require("../controllers/task").getTask);
// delete one person data
router.delete("/:userID", require("../controllers/task").deleteTask);

// update one person data
router.put("/:userID", require("../controllers/task").updateTask);

module.exports = router;