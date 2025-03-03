import PropTypes from "prop-types";
import Door from "./Door";
import Window from "./Window";


const Room = ({ name, width, height, doors, windows }) => {
  return (
    <div className="relative border border-black" style={{ width: width * 10, height: height * 10 }}>
      <p className="text-center">{name}</p>
      {doors.map((door, index) => (
        <Door key={index} position={door.position} />
      ))}
      {windows.map((window, index) => (
        <Window key={index} position={window.position} />
      ))}
    </div>
  );
};

// ✅ Add PropTypes validation
Room.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  doors: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
  windows: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Room;
