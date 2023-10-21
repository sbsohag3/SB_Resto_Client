const OfferItem = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <>
      <div className="card h-auto bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 text-yellow-600 border-b-4  mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferItem;
