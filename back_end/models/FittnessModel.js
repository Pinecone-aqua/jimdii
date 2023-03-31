import mongoose from "mongoose";

const fitnessSchema = new mongoose.Schema({}, { collection: "Fitness" });

const Fitness = mongoose.model("Fitness", fitnessSchema);

export default Fitness;
