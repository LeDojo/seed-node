import { mongoose, Schema } from "mongoose";

const travelSchema = new Schema({
  destination: { type: String, required: true },
  price: { type: Number, default: 0 },
  description: String,
  image: String,
});

const Travel = mongoose.model("Travel", travelSchema);

export default Travel;
