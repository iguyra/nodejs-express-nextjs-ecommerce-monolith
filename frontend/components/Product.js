import React from "react";
import axios from "axios";
import Card from "./Card";

import products from "../data/products.json";

export default class Product extends React.Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/api/products");
    this.setState({ product: data.product });
  }

  render() {
    const { product } = this.state;

    return (
      <section className="product">
        {/* <h4 className="product__phrase">trending this week</h4> */}
        {/* <div className="product__list"> */}
          {products.map((product) => {
            console.log("product from product", product);
            return <Card product={product} />;
          })}
        {/* </div> */}
      </section>
    );
  }
}
