const express = require("express");
const router = express.Router();

const controllers = require("../controllars/controllar");
const {pool} = require("../config/db")

router.get("/get", controllers.getData);

router.post("/post", controllers.insertData);

router.get("/get/:id", controllers.getData_by_id);

router.patch("/update/:id", controllers.updateData_by_id);

router.delete("/delete/:id", controllers.deleteData_by_id);

module.exports = router;
