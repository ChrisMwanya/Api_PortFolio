/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

app.use((req, res, next) => {
  req.con = connectDB;
  next();
});

app.use(express.json());
app.use(cors());

const technoRouter = require("./routes/technoroute");

app.use("/techno", technoRouter);

app.listen(3009, () => {
  console.log("server listening on 3009");
});
