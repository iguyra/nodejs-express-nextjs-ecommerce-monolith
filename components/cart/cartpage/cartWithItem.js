import React, { useEffect, useState, useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../../../context/appContext";

const CartWithItem = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(AppContext);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("isavecart"));
    setProducts(products);
    console.log("product from cartwith", products);
  }, [cart]);

  return (
    <section className="cartitem">
      <div className="cartitem__messagedisplay">
        <p className="cartitem__update">your cart is updated</p>
        <p className="cartitem__itemnumber">my cart ({products.totalProductsCount})</p>
      </div>

      {products.products &&
        products.products.map((product) => {
          return <CartItem product={product} />;
        })}

      <div className="cartitem__checkoutcontainer">
        <div className="cartitem__container">
          <div className="cartitem__totalcontainer">
            <p className="cartitem__totalword">total</p>
            <p className="cartitem__totalprice">GH {products.totalProductsPrice}</p>
          </div>
          <p className="cartitem__policy">delievry fee not included</p>
        </div>
        <p className="cartitem__checkout" id="checkout">
          checkout
        </p>
        <p className="cartitem__call">call to order</p>
      </div>
    </section>
  );
};

export default CartWithItem;
