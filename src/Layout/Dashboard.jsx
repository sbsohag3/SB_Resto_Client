import { NavLink, Outlet } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { GiWallet, GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { TbCalendarExclamation } from 'react-icons/tb';
import { MdRateReview, MdContactMail } from 'react-icons/md';
import useCart from '../hooks/useCart';

export default function Dashboard() {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full gap-y-2 uppercase ">
          <li>
            <NavLink to="userHome">
              <FaHome /> User home
            </NavLink>
          </li>
          <li>
            <NavLink to="reservation">
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/pamentHistory">
              <GiWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <BsCart3 /> My Cart
              <span className='badge gap-2 badge-secondary'>{cart?.length || 0}+</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <TbCalendarExclamation /> My booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addreview">
              <MdRateReview /> add review
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <GiHamburgerMenu /> menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/soup">
              <GiShoppingBag /> order food
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              <MdContactMail /> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
