
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import OfferItem from './OfferItem';
import useMenu from '../../../hooks/useMenu';

const Offered = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
  return (
    <section className="mb-12">
      <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={' Should Try'} />
      <div className="grid md:grid-cols-4 gap-10">
        {offered.map(item => (
          <OfferItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Offered;
