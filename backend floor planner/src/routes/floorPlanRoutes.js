import express from "express";
import FloorPlan from "../models/FloorPlan.js";

const router = express.Router();

// Sample Floor Plan Data
const floorPlanData = {
  name: "Sample Floor Plan",
  rooms: [
    { name: "Living Room", width: 200, height: 150, position: { x: 50, y: 50 } },
    { name: "Kitchen", width: 150, height: 120, position: { x: 300, y: 50 } }
  ],
  walls: [
    { length: 200, position: { x: 50, y: 60 } }
  ],
  doorsAndWindows: [
    { type: "door", position: { x: 125, y: 200 }, width: 30, height: 10 },
    { type: "window", position: { x: 350, y: 40 }, width: 50, height: 10 }
  ]
};

// GET Floor Plan Data (Sample)
router.get("/", (req, res) => {
  res.json(floorPlanData);
});

// Save Floor Plan to MongoDB (POST request)
router.post("/", async (req, res) => {
  try {
    const newFloorPlan = new FloorPlan(req.body);
    await newFloorPlan.save();
    res.status(201).json(newFloorPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Add a new floor plan
router.post("/", async (req, res) => {
  try {
    const { name, rooms, walls, doorsAndWindows } = req.body;

    const newFloorPlan = new FloorPlan({
      name,
      rooms,
      walls,
      doorsAndWindows,
    });

    await newFloorPlan.save();
    res.status(201).json({ message: "Floor plan created successfully", data: newFloorPlan });
  } catch (err) {
    res.status(500).json({ message: "Error creating floor plan", error: err });
  }
});
export default router;
