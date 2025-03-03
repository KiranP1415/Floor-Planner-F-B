import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Sidebar";

const FloorPlan = () => {
  const [rooms, setRooms] = useState([]);
  const [items, setItems] = useState([]);

  // Add Room
  const handleAddRoom = () => {
    setRooms([...rooms, { id: Date.now(), width: 200, height: 200, x: 50, y: 50 }]);
  };

  // Drop Zone for Doors & Windows
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.DOOR, ItemTypes.WINDOW],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;
      
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: item.type, x: offset.x - 100, y: offset.y - 50 },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="flex-1 p-4">
      {/* Add Room Button */}
      <button 
        onClick={handleAddRoom} 
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Room
      </button>

      {/* Floor Plan Area */}
      <div ref={drop} className="relative w-full h-[500px] border bg-gray-50">
        {/* Render Rooms */}
        {rooms.map((room) => (
          <div
            key={room.id}
            className="absolute bg-gray-200 border border-gray-500"
            style={{ width: `${room.width}px`, height: `${room.height}px`, top: `${room.y}px`, left: `${room.x}px` }}
          >
            Room
          </div>
        ))}

        {/* Render Windows & Doors */}
        {items.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.type === ItemTypes.DOOR ? "bg-red-500" : "bg-blue-500"}`}
            style={{ width: "40px", height: "40px", left: `${item.x}px`, top: `${item.y}px` }}
          />
        ))}

        {/* Drop Area Highlight */}
        {isOver && <div className="absolute inset-0 bg-gray-300 opacity-30" />}
      </div>
    </div>
  );
};

export default FloorPlan;
