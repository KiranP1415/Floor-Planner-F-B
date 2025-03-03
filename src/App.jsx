import Header from "./Components/Header";
import FloorCanvas from "./Components/FloorCanvas";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import FabricCanvas from "./Components/FabricCanvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="flex flex-1 flex-col lg:flex-row gap-6 px-6 mt-16">
          <Sidebar />
          <FloorCanvas />
        </div>
        <div className="w-full flex justify-center my-4">
          <FabricCanvas />
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;
