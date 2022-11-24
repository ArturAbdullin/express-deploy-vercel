const express = require("express");
const cors = require("cors");
const memberRouter = require("./src/member/routes");

const app = express();
app.use(
  cors({
    origin: "https://arturabdullin.github.io/fetch-vercel/",
  })
);
app.use("/members", memberRouter);

module.exports = app;
