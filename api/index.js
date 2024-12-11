const express = require("express");
const app = express();
const dotenv = require("dotenv");
require('dotenv').config();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRouter);

app.use("/",(req,res) =>{
    console.log("main url")
})
app.listen(3000, () =>{
    console.log("object")
})