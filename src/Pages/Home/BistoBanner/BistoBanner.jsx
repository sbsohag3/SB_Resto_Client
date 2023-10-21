
import img from '../../../assets/home/chef-service.jpg';


const BistoBanner = () => {
  return (
    <>
      <div
        className="hero h-[500px]  my-20"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl text-black bg-white mx-44 my-10 px-10 py-12">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BistoBanner;
