// // import { useEffect, useState } from "react";
// // import PropTypes from "prop-types";
// // import Room from "./Room";

// // const FloorCanvas = () => {
// //   const [rooms, setRooms] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/floorplan")
// //       .then((res) => res.json())
// //       .then((data) => setRooms(data))
// //       .catch((error) => console.error("Error fetching floor plan:", error));
// //   }, []);

// //   useEffect(() => {
// //     let canvas;
    
// //     import("fabric").then(({ fabric }) => {
// //       canvas = new fabric.Canvas("floorCanvas");

// //       rooms.forEach(({ width, height }) => {
// //         const room = new fabric.Rect({
// //           left: 100,
// //           top: 100,
// //           width: width * 10,
// //           height: height * 10,
// //           fill: "lightgray",
// //           stroke: "black",
// //           strokeWidth: 2,
// //         });
// //         canvas.add(room);
// //       });
// //     }).catch((error) => console.error("Error loading fabric.js:", error));

// //     return () => {
// //       if (canvas) {
// //         canvas.dispose();
// //       }
// //     };
// //   }, [rooms]);

// //   return (
// //     <div className="relative border p-4">
// //       <canvas id="floorCanvas" width="800" height="600" className="border"></canvas>
// //       {rooms.map((room, index) => (
// //         <Room key={index} {...room} />
// //       ))}
// //     </div>
// //   );
// // };


// // FloorCanvas.propTypes = {
// //   rooms: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       name: PropTypes.string.isRequired,
// //       width: PropTypes.number.isRequired,
// //       height: PropTypes.number.isRequired,
// //       doors: PropTypes.arrayOf(
// //         PropTypes.shape({
// //           position: PropTypes.string.isRequired,
// //         })
// //       ).isRequired,
// //       windows: PropTypes.arrayOf(
// //         PropTypes.shape({
// //           position: PropTypes.string.isRequired,
// //         })
// //       ).isRequired,
// //     })
// //   ),
// // };

// // export default FloorCanvas;




// import { useEffect, useRef, useState } from "react";
// import axios from "axios";

// const FloorCanvas = () => {
//   const canvasRef = useRef(null);
//   const [floorPlan, setFloorPlan] = useState(null);

//   useEffect(() => {
//     // Fetch floor plan data from API
//     axios.get("http://localhost:5000/api/floorplan")
//       .then((response) => setFloorPlan(response.data))
//       .catch((error) => console.error("Error fetching floor plan:", error));
//   }, []);

//   useEffect(() => {
//     if (!floorPlan) return;

//     let canvas;

//     const loadFabric = async () => {
//       const { fabric } = await import("fabric"); // ✅ Dynamic import

//       canvas = new fabric.Canvas(canvasRef.current, {
//         backgroundColor: "#f0f0f0",
//         selection: true,
//       });

//       // Function to add a room
//       const addRoom = (room) => {
//         const rect = new fabric.Rect({
//           left: room.x,
//           top: room.y,
//           fill: "#d1e8ff",
//           width: room.width,
//           height: room.height,
//           stroke: "black",
//           strokeWidth: 2,
//           selectable: true,
//         });
//         canvas.add(rect);

//         // Room Label
//         const text = new fabric.Text(room.name, {
//           left: room.x + 10,
//           top: room.y + 10,
//           fontSize: 14,
//           fontWeight: "bold",
//         });
//         canvas.add(text);
//       };

//       // Function to add a door
//       const addDoor = (door) => {
//         const rect = new fabric.Rect({
//           left: door.x,
//           top: door.y,
//           fill: "brown",
//           width: door.width,
//           height: door.height,
//           stroke: "black",
//           strokeWidth: 2,
//           selectable: true,
//         });
//         canvas.add(rect);
//       };

//       // Function to add a window
//       const addWindow = (window) => {
//         const rect = new fabric.Rect({
//           left: window.x,
//           top: window.y,
//           fill: "lightblue",
//           width: window.width,
//           height: window.height,
//           stroke: "black",
//           strokeWidth: 2,
//           selectable: false,
//         });
//         canvas.add(rect);
//       };

//       // Render elements
//       floorPlan.rooms.forEach(addRoom);
//       floorPlan.doors.forEach(addDoor);
//       floorPlan.windows.forEach(addWindow);
//     };

//     loadFabric();

//     return () => {
//       if (canvas) {
//         canvas.dispose();
//       }
//     };
//   }, [floorPlan]);

//   return (
//     <div className="border border-gray-300 p-2 bg-white shadow-md rounded-md">
//       <canvas ref={canvasRef} width={600} height={400} />
//     </div>
//   );
// };

// export default FloorCanvas;





import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { useState } from "react";

const FloorCanvas = () => {
  const [rooms, setRooms] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ROOM,
    drop: () => addRoom(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addRoom = () => {
    setRooms([...rooms, { id: Date.now(), x: 50, y: 50, width: 150, height: 150 }]);
  };

  return (
    <div ref={drop} className="flex-1 bg-gray-200 p-4 relative border border-gray-400">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="absolute bg-gray-300 border border-gray-600"
          style={{
            width: `${room.width}px`,
            height: `${room.height}px`,
            left: `${room.x}px`,
            top: `${room.y}px`,
          }}
        />
      ))}

      {isOver && <div className="absolute inset-0 bg-gray-400 opacity-30" />}
    </div>
  );
};

export default FloorCanvas;
