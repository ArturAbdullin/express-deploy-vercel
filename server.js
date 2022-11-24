const express = require("express");
const memberRouter = require("./src/member/routes");

const app = express();
app.use("/members", memberRouter);

module.exports = app;
