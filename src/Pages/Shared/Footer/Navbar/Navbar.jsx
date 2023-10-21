import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';
import userLogo from '../../../../assets/others/user_logo.png';
import { BsCart3 } from 'react-icons/bs';
import useCart from '../../../../hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/soup">Food Order</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycart">
          <>
            <label tabIndex="0">
              <div className="indicator ">
                <BsCart3 className="w-10 rounded-full" />
                <span className="badge badge-secondary badge-sm indicator-item ">
                  {cart?.length || 0}
                </span>
              </div>
            </label>
          </>
        </NavLink>
      </li>

      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost  avatar">
              <div className="w-6 rounded-full">
                <img src={user?.photoURL || userLogo} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-900 text-white rounded-box w-52"
            >
              <li>
                <a>{user?.displayName}</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <NavLink onClick={handleLogOut}>Log Out</NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-center dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SB Restaurant </a>
        </div>
        <div className="navbar-end hidden lg:flex text-center">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
