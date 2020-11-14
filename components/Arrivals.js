import React from "react";
import Link from "next/link";
import arrival from "../data/arrival.json";
import AddToCartButton from "../components/cart/AddToCartButton";

export default class Arrivals extends React.Component {
  render() {
    return (
      <section className="arrivals">
        <h4 className="product__phrase">new arrivals</h4>

        <ul className="arrivals__list">
          {arrival.map((arrival) => {
            return (
              <li key={arrival.name} className="arrivals__item">
                <Link href={`/products/[product]}`} as={`/products/${arrival._id}`}>
                  <a className="arrivals__link">
                    <img src={arrival.image} alt="" className="arrivals__img" />
                    <div className="arrivals__details">
                      <p className="arrivals__name">{arrival.name}</p>
                      <p className="arrivals__price">{arrival.price} GH</p>
                    </div>
                  </a>
                </Link>
                <AddToCartButton product={arrival} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
