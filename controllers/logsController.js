const express = require("express");
const router = express.Router();
const logsArray = require("../models/logs.js");

router.get("/", (req, res) => {
    res.json(logsArray);
    console.log(res);
});


module.exports = router;
