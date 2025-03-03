import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: String,
  width: Number,
  height: Number,
  position: { x: Number, y: Number }
});

const WallSchema = new mongoose.Schema({
  length: Number,
  position: { type: { x: Number, y: Number } }
});

const DoorWindowSchema = new mongoose.Schema({
  type: { type: String, enum: ["door", "window"] },
  position: { type: { x: Number, y: Number } },
  width: Number,
  height: Number
});

const FloorPlanSchema = new mongoose.Schema({
  name: String,
  rooms: [RoomSchema],
  walls: [WallSchema],
  doorsAndWindows: [DoorWindowSchema]
});

const FloorPlan = mongoose.model("FloorPlan", FloorPlanSchema);
export default FloorPlan;
