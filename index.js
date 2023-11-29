const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
const flash = require('connect-flash');
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Succesfully Connected"))
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.static("svg"));
app.set("view engine", "ejs");
//Routes
//BodyParsing
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.json());
app.use("/", require("./routes/login"));
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT));
