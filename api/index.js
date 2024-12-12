const express = require("express");
const app = express();
const dotenv = require("dotenv");
require('dotenv').config();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const recipeRouter = require("./routes/recipe");

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
app.use("/api/users", usersRouter);
app.use("/api/recipes", recipeRouter);

app.use("/",(req,res) =>{
    console.log("main url")
})
app.listen(3000, () =>{
    console.log("object")
})