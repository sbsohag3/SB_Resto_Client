import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

export default function FoodCard({ item }) {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handelAddToCard = item => {
    console.log(item);
    if (user && user.email) {
      const orderItem = { foodId: _id, name, image, price, email: user.email };
      fetch('http://localhost:500/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(orderItem),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: 'success',
              title: 'Your Order saved to cart successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else
      Swal.fire({
        title: 'Please Login to Order the Food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
  };
  return (
    <div className="card h-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0  mt-4 px-6 text-white text-xl bg-red-400  ">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handelAddToCard(item)}
            className="btn btn-outline border-0 text-yellow-600 border-b-4 bg-slate-300  mt-4"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}
