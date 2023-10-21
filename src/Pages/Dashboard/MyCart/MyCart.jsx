import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

export default function MyCart() {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>SB Resto | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-evenly h-[70px] item-center">
        <h3 className="text-xl">Total Orders: {cart.length}</h3>
        <h3 className="text-xl">Total Price: ${total}</h3>
        <button className="btn btn-outline btn-xs btn-warning">Pay Now</button>
      </div>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full">
          <thead className=" bg-[#D1A054] text-white text-[18px] uppercase">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id} className="text-[16px]">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td className="text-end">
                  <p>${item.price}</p>
                </td>

                <td className="text-center">
                  <button className="btn btn-ghost bg-red-600 btn-sm ">
                    <FaTrashAlt className="text-white " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
