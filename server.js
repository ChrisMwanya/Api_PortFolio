/* eslint-disable no-undef */
require('dotenv').config();
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
const projectRouter = require("./routes/projectroute");
const projectTechnoRouter = require("./routes/projecttechnoroute");
app.use("/", technoRouter);
app.use("/", projectRouter);
app.use("/", projectTechnoRouter);

app.listen(3009, () => {
  console.log("server listening on 3009");
});
