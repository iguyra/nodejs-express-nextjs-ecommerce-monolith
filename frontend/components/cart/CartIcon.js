import { useContext } from "react";
import Link from "next/link";

import React from "react";
import styles from "./CartIcon.module.scss";

import { AppContext } from "../../context/appContext";

const CartIcon = () => {
  const [cart, setCart] = useContext(AppContext);

  const productCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : "";

  const totalPrice =
    null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : "";

  return (
    <React.Fragment>
      <div className="cartIcon">
        <Link href="/cart">
          <i className="fa fa-shopping-cart cartIcon__icon"></i>
        </Link>
        <div className="cartIcon__cartDetailContainer">
          <span>{productCount ? <span>{productCount} </span> : ""}</span>
          <a className="totalPrice">
            {totalPrice ? <span>${totalPrice}</span> : ""}
          </a>
        </div>
      </div>

      <style jsx>{`
        .cartIcon {
          display: flex;
        }

        .totalPrice {
        }
        .cartIcon__cartDetailContainer {
          display: flex;
          flex-direction: column;
        }

        .cartIcon__icon {
          font-size: 2rem;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};
export default CartIcon;
