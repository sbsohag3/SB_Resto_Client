import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({ children }) => {
 const { user, loading } = useContext(AuthContext);
 const location = useLocation()
  if (loading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivetRouts;
