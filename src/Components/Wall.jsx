import PropTypes from "prop-types";

const Wall = ({ width, height }) => {
  return (
    <div
      className="border-4 border-black bg-gray-700"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "inline-block",
      }}
    ></div>
  );
};

Wall.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Wall.defaultProps = {
  width: 100, 
  height: 10, 
};

export default Wall;

