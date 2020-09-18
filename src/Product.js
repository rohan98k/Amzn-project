import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useStateValue } from "./StateProvider";

function Product({
  id,
  title,
  image,
  price,
  rating,
  halfrating,
  norating,
  customer,
}) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    //dispatch the item in to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        halfrating: halfrating,
        norating: norating,
        customer: customer,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small className>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon className="product__starIcon" />
            ))}
          {Array(halfrating)
            .fill()
            .map(() => (
              <StarHalfIcon className="product__starIcon" />
            ))}
          {Array(norating)
            .fill()
            .map(() => (
              <StarBorderIcon className="product__starIcon" />
            ))}
          <p className="product__customer">{customer}</p>
        </div>
      </div>
      <img className="product__img" src={image} alt={title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
