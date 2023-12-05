require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const membersRoutes = require("./routes/membersRoutes.js");
const cors = require("cors");
const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("welcome");
});

app.use("/members", membersRoutes);

app.get("*", (req, res) => {
  res.redirect("/");
});

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
