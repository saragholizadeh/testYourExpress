const express = require("express");
const router = express.Router();
const { all, get, create, remove } = require("../controllers/task.controller");

router.get("/all", all);
router.post("/create", create);
router.get("/get/:id", get);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
