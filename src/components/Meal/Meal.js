const Meal = ({ data, handleAddToCart }) => {
  const { strMeal, strArea, strTags, strMealThumb } = data;
  const info = {
    strMeal,
    strArea,
    quantity: 1,
  };
  return (
    <div className="card h-100 bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strMeal}
          <div className="badge badge-secondary">
            {strArea ? strMeal : "Not Found"}
          </div>
        </h2>
        <p>
          {strTags ? (
            strTags
          ) : (
            <span className="text-red-600">Tags Not Found</span>
          )}
        </p>
        <div className="card-actions justify-end">
          <div
            onClick={() => handleAddToCart(info)}
            className="badge badge-outline cursor-pointer"
          >
            Add To Cart
          </div>
          <div className="badge badge-outline cursor-pointer">See Details</div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
