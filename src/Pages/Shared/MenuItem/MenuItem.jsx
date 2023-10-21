const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 px-12">
      <img
        style={{ borderRadius: '0 200px 200px 300px' }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl text-yellow-400">
          {name} -------
        </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-red-500 text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
