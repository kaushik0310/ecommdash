const mongoose=require("mongoose");

const userDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    profession: {
      type: String,
      default: "",
    },
    hobbies: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    religion: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "please provide password"],
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model("userData",userDataSchema)