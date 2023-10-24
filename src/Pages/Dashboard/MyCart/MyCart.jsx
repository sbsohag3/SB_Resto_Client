import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function MyCart() {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:500/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Item has been deleted.',
                showConfirmButton: false,
                timer: 1500,
              });
              
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-10 my-10">
      <Helmet>
        <title>SB Resto | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-between h-[70px] item-center">
        <h3 className="text-xl">Total Orders: {cart.length}</h3>
        <h3 className="text-xl">Total Price: ${total}</h3>
        <button className="btn btn-outline btn-xs btn-warning">Pay Now</button>
      </div>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full ">
          <thead className=" bg-[#D1A054] text-white text-[18px] text-center uppercase">
            <tr>
              <th className="text-start">#</th>
              <th className="text-start">Food</th>
              <th className="text-start">Item Name</th>
              <th>Price</th>
              <th className="text-end">Action</th>
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
                <td className="text-center">
                  <p>${item.price}</p>
                </td>

                <td className="text-end">
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600 btn-sm "
                  >
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
