import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { FaDoorOpen, FaWindowMaximize, FaDrawPolygon, FaRuler } from "react-icons/fa";

const FloorPlanner = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 500,
      backgroundColor: "#f5f5f5",
    });
    setCanvas(fabricCanvas);
  }, []);

  const addRoom = () => {
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: "rgba(173, 216, 230, 0.5)",
      width: 200,
      height: 150,
      stroke: "blue",
      strokeWidth: 2,
      selectable: true,
    });
    canvas.add(rect);
  };

  const addWall = () => {
    const line = new fabric.Line([50, 100, 300, 100], {
      stroke: "black",
      strokeWidth: 5,
      selectable: true,
    });
    canvas.add(line);
  };

  const addDoor = () => {
    fabric.Image.fromURL("/images/door-2d.png", (img) => {
      img.scale(0.2);
      img.set({ left: 100, top: 100, selectable: true });
      canvas.add(img);
    });
  };

  const addWindow = () => {
    fabric.Image.fromURL("/images/window-2d.png", (img) => {
      img.scale(0.2);
      img.set({ left: 200, top: 100, selectable: true });
      canvas.add(img);
    });
  };

  return (
    <div className="p-4 flex gap-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Tools</h2>
        <button onClick={addRoom} className="btn"><FaDrawPolygon /> Draw Room</button>
        <button onClick={addWall} className="btn"><FaRuler /> Draw Wall</button>
        <button onClick={addDoor} className="btn"><FaDoorOpen /> Add Door</button>
        <button onClick={addWindow} className="btn"><FaWindowMaximize /> Add Window</button>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="border border-gray-300"></canvas>
    </div>
  );
};

export default FloorPlanner;
