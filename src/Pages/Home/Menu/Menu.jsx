import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  return (
    <div>
      <Helmet>
        <title>SB Resto | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      <SectionTitle heading={"today's offer"} subHeading={"Don't Miss "} />
      {/* Offer Menu items */}
      <MenuCategory items={offered} />

      {/* Soup Menu items */}
      <MenuCategory items={soup} img={soupImg} title={'soup'} />
      {/* Salad Menu items */}
      <MenuCategory items={salad} img={saladImg} title={'salad'} />
      {/* Pizza Menu items */}
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'} />
      {/* Desserts Menu items */}
      <MenuCategory items={dessert} img={dessertImg} title={'desserts'} />
    </div>
  );
};

export default Menu;
