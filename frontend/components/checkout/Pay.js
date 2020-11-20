import React, { useState, useEffect } from "react";

export const Pay = ({ cart }) => {
  const [state, setState] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    let input = localStorage.getItem("inputs");
    input = JSON.parse(input);
    setInput(input);
  }, []);

  console.log("input", input);

  return (
    <section className="details pay" id="pay">
      <ul className="steps">
        <p className="steps__list ">details</p>
        <p className="steps__list ">shipping</p>
        <p className="steps__list active">pay</p>
      </ul>

      <div className="details__summarycontainer">
        <p className="details__summary">summary</p>
        <ul className="details__list">
          <li className="details__item">
            <i className="far icon fa-user"></i>
            {input && input.firstname}
          </li>
          <li className="details__item">
            <i className="fas icon fa-map-pin"></i>bus stop 100
          </li>
          <li className="details__item">
            <i className="far icon fa-envelope"></i> {input && input.email}
          </li>
          <li className="details__item">
            <i className="fas icon fa-phone-alt"></i> {input && input.number}
          </li>
        </ul>
      </div>

      <div className="details__itemcontainer">
        <ul className="details__alllist">
          <li className="details__allitems details__allitems--total">
            total price
            <p className="details__allitemprice">
              GH: {cart.totalProductsPrice}
            </p>
          </li>
          <li className="details__allitems">
            causal snkeaer GT0
            <p className="details__allitemprice">GH: 500</p>
          </li>
          {cart.products &&
            cart.products.map((product) => (
              <li className="details__allitems">
                {product.name}
                <p className="details__allitemprice">
                  GH: {product.totalPrice}
                </p>
              </li>
            ))}
        </ul>
      </div>

      <div className="details__nextcontainer">
        <div className="details__next">
          <a href="#" className="details__next--link" id="paymentproceed">
            pay
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pay;
