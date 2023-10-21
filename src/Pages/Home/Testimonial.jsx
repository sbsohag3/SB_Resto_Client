import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:500/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section className="my-20 ">
      <SectionTitle
        heading={'TESTIMONIALS'}
        subHeading={'What Our Clients Say'}
      />
      <div className="mx-40">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className="mx-20 items-center flex flex-col ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className='my-4 text-3xl' />
                <p>{review.details}</p>
                <h3 className="text-2xl">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
