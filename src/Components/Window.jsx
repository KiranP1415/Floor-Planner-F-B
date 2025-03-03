
import PropTypes from 'prop-types';

const Window = ({ position }) => {
  return <div className="bg-blue-300 w-16 h-10 absolute" style={{ left: position === 'center' ? '50%' : '10%' }}></div>;
};

Window.propTypes = {
  position: PropTypes.oneOf(['center', 'left', 'right']).isRequired
};

export default Window;

