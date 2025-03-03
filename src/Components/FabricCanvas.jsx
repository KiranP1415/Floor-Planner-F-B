import { useEffect, useRef } from "react";

const FabricCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas;

    
    import("fabric").then((fabricModule) => {
      const { fabric } = fabricModule; 

      
      canvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#f0f0f0",
        selection: true, 
      });

     
      const rect = new fabric.Rect({
        left: 50,
        top: 50,
        fill: "blue",
        width: 100,
        height: 100,
      });

      canvas.add(rect);
    }).catch((error) => console.error("Error loading fabric.js:", error));

    return () => {
      if (canvas) {
        canvas.dispose();
      }
    };
  }, []);

  return (
    <div className="border border-gray-300 p-2 bg-white shadow-md rounded-md">
      <canvas ref={canvasRef} width={500} height={400} />
    </div>
  );
};

export default FabricCanvas;
  