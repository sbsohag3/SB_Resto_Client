// import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BistoBanner from './BistoBanner/BistoBanner';
import Contact from './Contact';
import Featured from './Featured/Featured';
import Offered from './Offered/Offered';

import PopularMenu from './PopularMenu';
import Testimonial from './Testimonial';
import CategoryBanner from './CategoryBanner';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SB Resto | Home</title>
      </Helmet>
      <Banner />
      <CategoryBanner />
      <BistoBanner />
      <PopularMenu />
      <Contact />
      <Offered />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
