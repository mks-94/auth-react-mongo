const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.enable("trust proxy");

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Connect mongoose with local mongodb
mongoose.connect(
  "mongodb://127.0.0.1:27017/auth-cred",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB server established successfully!");
  }
);
