import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { updateCart } from "../../../functions";
import Product from "../../../pages/products/[product]";

const CartItem = ({ product }) => {
  const [productCount, setProductCount] = useState(product.qty);
  const [cart, setCart] = useContext(AppContext);

  const handleQtyChange = (e) => {
    if (process.browser) {
      const newQty = e.target.value;
      setProductCount(newQty);

      let existingCart = localStorage.getItem("isavecart");
      existingCart = JSON.parse(existingCart);

      const updatedCart = updateCart(existingCart, product, false, newQty);

      setCart(updatedCart);
    }
  };

  const handleRemoveCartItem = (e) => {
    const itemToBeRemoved = e.target;
    const itemToBeRemovedId = +itemToBeRemoved.id;
    const item = document.getElementById(itemToBeRemovedId);

    // const elementParent = itemToBeRemoved.parentNode.parentNode.parentNode.parentNode.parentNode;

    // const element = itemToBeRemoved.parentNode.parentNode.parentNode.parentNode;

    // elementParent.removeChild(element);

    // console.log("itemToBeRemoved", elementParent, item, element);

    let existingCart = localStorage.getItem("isavecart");
    existingCart = JSON.parse(existingCart);

    const itemIndex = existingCart.products.findIndex((product) => {
      return product._id === itemToBeRemovedId;
    });

    if (-1 < itemIndex) {
      let updatedCart = existingCart;

      const productToBeRemoved = existingCart.products[itemIndex];

      const itemToBeRemovedQty = +productToBeRemoved.qty;
      const itemToBeRemovedPrice = +productToBeRemoved.totalPrice;

      updatedCart.totalProductsCount = updatedCart.totalProductsCount - itemToBeRemovedQty;
      updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - itemToBeRemovedPrice;

      updatedCart.products.splice(itemIndex, 1);

      localStorage.setItem("isavecart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }

    console.log("ousited", itemToBeRemovedId, itemIndex, existingCart);
    // updatedCart.products.splice(itemIndex, 1);

    // console.log(updatedCart, existingCart);

    // setCart(updatedCart);
    // localStorage.setItem("isavecart", JSON.stringify(updatedCart));
  };

  return (
    <React.Fragment>
      <section className="cart0">
        <div className="cartitem">
          <div key={product.productId} className="cartitem__top">
            <img src={product.image} alt="" className="cartitem__img" />
            <div className="cartitem__details">
              <p className="cartitem__productname">{product.name}</p>
              <p className="cartitem__size">size: one size fits all</p>
              <p className="cartitem__price">GH {product.price}</p>
              <p className="cartitem__price">GH {product.totalPrice}</p>
            </div>
          </div>
          <div className="cartitem__bottom">
            <div className="cartitem__control">
              <i className="far fa-heart"></i>
              <i onClick={handleRemoveCartItem} id={product._id} className="fas fa-trash-alt">
                remove
              </i>
            </div>
            <div className="cartitem__incdes">
              <p className="cartitem__qunatity cartitem__qunatity--dec">-</p>
              <input
                type="number"
                min="1"
                onChange={handleQtyChange}
                className="cartitem__qunatity cartitem__qunatity--number"
                value={productCount}
              />
              <p className="cartitem__qunatity cartitem__qunatity--inc">+</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartItem;
