import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useStateValue } from "./StateProvider";
import { BottomNavigation } from "@material-ui/core";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  halfrating,
  norating,
  customer,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove the item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong> {price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon className="Product__starIcon" />
            ))}
          {Array(halfrating)
            .fill()
            .map(() => (
              <StarHalfIcon className="Product__starIcon" />
            ))}
          {Array(norating)
            .fill()
            .map(() => (
              <StarBorderIcon className="Product__starIcon" />
            ))}
          <p className="checkoutProduct__customer">{customer}</p>
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
