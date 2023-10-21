import { Link } from 'react-router-dom';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-12 ">
        {items.slice(0,6).map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className='flex flex-col items-center mb-10' to={`/order/${title}`}>
      <button className="btn btn-outline border-0 text-yellow-600 border-b-4  mt-4">
        Order Now
      </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
