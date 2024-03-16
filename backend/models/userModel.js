import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true["Please add a user name"],
    },

    email: {
      type: String,
      required: true["Please add an email"],
      unique: true,
    },

    password: {
      type: String,
      required: true["Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// pre: hash the password before it has been to database >> here before('save') we want to do:...
// so if we are just saving some user data and not changing or dealing with the password then next
// recap: we are hashing the password before it is saved to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});   

const User = mongoose.model("User", userSchema);

export default User;
 