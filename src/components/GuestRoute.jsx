import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GuestRoute({ children }) {
  const authUser = useSelector(
    (state) => state.authUser,
  );

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestRoute;