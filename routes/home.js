const path = require("path");
const express = require("express");
const rootDirectory = require("../util/path");
const router = express.Router();

router.get("", (req, res, next) => {
    res.sendFile(path.join(rootDirectory, "views", "index.html"));
});

module.exports = router;
