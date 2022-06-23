const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");

//database
require("./db/Cone");
const Register = require("./models/register");
const { json } = require("express");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const Partials = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(Partials);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/registration", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Create a new user to data base

app.post("/", async (req, res) => {
  try {
    console.log({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password,
      Confirmpasssword: req.body.Confirmpassword,
    });
    const password = req.body.password;
    const Confirmpassword = req.body.Confirmpassword;
    if (password === Confirmpassword) {
      //encrypted your password here
      const passwordHash = await bcrypt.hash(req.body.password, 10);

      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        password: passwordHash,
        Confirmpasssword: req.body.Confirmpassword,
      });

      console.log(registerEmployee);
      const registered = await registerEmployee.save();
      res.status(201).render(index);
    } else {
      res.send("password does'nt match ");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//login check the get method

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await Register.findOne({ email: email });
    if (userEmail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("password didn't match ");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`CONNECTION SUCCESSFUL... SERVER IS RUNNING AT PORT NO ${port}`);
});
