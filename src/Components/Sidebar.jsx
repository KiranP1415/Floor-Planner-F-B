import { useState } from "react";
import {
  FaCube,
  FaDoorOpen,
  FaWindowMaximize,
  FaDrawPolygon,
} from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { MdOutlineRoofing } from "react-icons/md";
import PropTypes from "prop-types";

const sections = [
  { key: "doors", icon: FaDoorOpen, label: "Place Doors" },
  { key: "windows", icon: FaWindowMaximize, label: "Place Windows" },
  { key: "structurals", icon: MdOutlineRoofing, label: "Place Structurals" },
];

const Sidebar = ({ addRoom }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Build</h2>
      
      <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md mb-4">
        Upload 2D Floorplan
      </button>

      <div className="space-y-2">
        <SidebarButton onClick={addRoom} icon={FaCube} label="Draw Room" />
        <SidebarButton icon={IoIosResize} label="Draw Wall" />
        <SidebarButton icon={FaDrawPolygon} label="Draw Surface" />
      </div>

      <div className="mt-4">
        {sections.map(({ key, icon: Icon, label }) => (
          <SidebarSection
            key={key}
            sectionKey={key}
            icon={Icon}
            label={label}
            isOpen={openSection === key}
            toggleSection={toggleSection}
          />
        ))}
      </div>
    </aside>
  );
};

const SidebarButton = ({ onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md"
  >
    <Icon className="mr-3 text-lg" /> {label}
  </button>
);

SidebarButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

const SidebarSection = ({ sectionKey, icon: Icon, label, isOpen, toggleSection }) => (
  <div className="mb-2">
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md"
    >
      <span className="flex items-center">
        <Icon className="mr-3 text-lg" /> {label}
      </span>
      <span className="text-lg">{isOpen ? "▲" : "›"}</span>
    </button>
    {isOpen && <SidebarImages sectionKey={sectionKey} label={label} />}
  </div>
);

SidebarSection.propTypes = {
  sectionKey: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleSection: PropTypes.func.isRequired,
};

const SidebarImages = ({ sectionKey, label }) => (
  <div className="mt-2 p-2 bg-gray-50 rounded-md grid grid-cols-3 gap-2 transition-all duration-300">
    {[...Array(6)].map((_, imgIndex) => (
      <a
        key={imgIndex}
        href={`https://your-image-hosting.com/${sectionKey}-${imgIndex + 1}.png`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://your-image-hosting.com/${sectionKey}-${imgIndex + 1}.png`}
          alt={`${label} ${imgIndex + 1}`}
          className="w-20 h-20 object-cover border rounded-md hover:scale-105 transition"
        />
      </a>
    ))}
  </div>
);

SidebarImages.propTypes = {
  sectionKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  addRoom: PropTypes.func.isRequired,
};

export default Sidebar;
