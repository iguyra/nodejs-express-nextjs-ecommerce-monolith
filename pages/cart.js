import React from "react";
import Layout from "../components/Layout";
import { getFrontUser } from "../server/fauthContoller";
import CartWithItem from "../components/cart/cartpage/cartWithItem";
import EmptyCart from "../components/cart/cartpage/EmptyCart";

class cart extends React.Component {
  state = {
    user: {},
    cart: [],
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const cart = JSON.parse(localStorage.getItem("isavecart"));

    if (cart) {
      this.setState({ cart });
    }

    const data = await getFrontUser(token);
    if (data) {
      this.setState({ user: data.user });
    }
  }

  render() {
    const { user, cart } = this.state;

    return <Layout>{cart ? <CartWithItem /> : <EmptyCart />}</Layout>;
  }
}
export default cart;
