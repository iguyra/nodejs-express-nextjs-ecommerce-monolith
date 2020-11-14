import React from "react";
import Link from "next/link";
import axios from "axios";
import { getFrontUser } from "../server/fauthContoller";
import CartIcon from "../components/cart/CartIcon";

class Heading extends React.Component {
  state = {
    user: {},
    headerActive: "header",
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const data = await getFrontUser(token);
    if (data) {
      this.setState({ user: data.user });
    }

    window.addEventListener("scroll", this.handleBackground);
  }

  handleBackground = () => {
    if (window.scrollY > 96) {
      this.setState({ headerActive: "header active" });
    } else {
      this.setState({ headerActive: "header" });
    }
  };

  render() {
    const { user, headerActive } = this.state;
    return (
      <section className={headerActive}>
        <div className="header__details">
          <div className="header__menu"></div>
          <Link href="/">
            <a className="header__name">iguyra</a>
          </Link>
        </div>
        <div className=""></div>
        <div className="searchtest">
          <div className="searchtest__inputcontainer">
            <input
              type="text"
              className="searchtest__input"
              placeholder="search product"
              id="searchinput"
            />
            <a href="#" className="searchtest__searchbutton" id="searchbutton">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>

        <div className="header__profileDetails">
          <div className="header__profile">
            {user.email ? (
              <Link href="/user">
                <a>
                  <i className="fas activeIcon fa-user" id="user"></i>
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a>
                  <i className="fas fa-user" id="userLogin"></i>
                </a>
              </Link>
            )}
          </div>
          <div className="header__cart">
            <CartIcon />
            {/* <Link href="/cart">
              <a>
                <i className="fas fa-cart-plus"></i>
              </a>
            </Link> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Heading;
