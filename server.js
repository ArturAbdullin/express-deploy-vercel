const express = require("express");
const cors = require("cors");
const memberRouter = require("./src/member/routes");

const app = express();
app.use(cors());
app.use("/members", memberRouter);

module.exports = app;
