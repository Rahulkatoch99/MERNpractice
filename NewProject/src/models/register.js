const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  Confirmpassword: {
    type: String,
    // required: true,
  },
});

//now we need to create collection

const Register = new mongoose.model("Register", employee);
// Register.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const passwordHash = await bcrypt.hash(password, 10);
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

module.exports = Register;
