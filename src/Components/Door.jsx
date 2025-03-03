import PropTypes from "prop-types";

const Door = ({ position }) => {
  return <div className="bg-brown-500 w-10 h-20 absolute" style={{ left: position === "center" ? "50%" : "10%" }}></div>;
};


Door.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Door;
