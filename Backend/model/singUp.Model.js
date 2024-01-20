const mongoose = require("mongoose");
const loginschema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name:{type:String,require:true},
  mobilenumber:{type:String,require:true}
});
const SingUpModel = mongoose.model("SignUpdata", loginschema);

module.exports = { SingUpModel };