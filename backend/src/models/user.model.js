import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },    
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("User", user);