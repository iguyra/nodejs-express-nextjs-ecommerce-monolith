import Link from "next/link";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { addFirstProduct, updateCart } from "../../functions";

const AddToCartButton = (props) => {
  const { product } = props;

  const [cart, setCart] = useContext(AppContext);

  const handleAddToCartClick = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem("isavecart");
      console.log("existingCart", existingCart);

      //if cart the item(s) already update the existing
      if (existingCart) {
        existingCart = JSON.parse(existingCart);
        const gtyToBeAdded = 1;

        const updatedCart = updateCart(existingCart, product, gtyToBeAdded);
        localStorage.setItem("isavecart", JSON.stringify(updatedCart));
        setCart(updatedCart);
      } else {
        //add frist product
        const newCart = addFirstProduct(product);
        localStorage.setItem("isavecart", JSON.stringify(newCart));
        setCart(newCart);
      }
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleAddToCartClick} className="addtocartbutton">
        add to cart
      </button>

      <style jsx>{`
        .addtocartbutton {
          border: none;
          text-transform: capitalize;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AddToCartButton;
