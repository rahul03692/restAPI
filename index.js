const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => console.log("DB successful"));

const routes = require("./routes/api");

const app = express();

app.enable("trust proxy");

app.use(express.json());
app.use("/api", routes);

app.get("/", () => {
  res.send("go to /api to see data");
});

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("server is running on 5000");
});
