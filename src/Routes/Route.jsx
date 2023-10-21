import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Home/Menu/Menu';
import Order from '../Pages/Home/FoodOrder/Order/Order';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import PrivetRouts from './privetRouts';
import Secret from '../Pages/Shared/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'order/:category',
        element: <Order />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'secret',
        element: (
          <PrivetRouts>
            <Secret />
          </PrivetRouts>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'mycart',
        element: <MyCart/>
      }
    ]
  },
]);
