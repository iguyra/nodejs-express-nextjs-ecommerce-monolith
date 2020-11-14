import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Header from "../../components/Heading";
import Layout from "../../components/Layout";

class Heading extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");

    console.log("componentmounted", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get("http://localhost:3000/api/users/cart", config);
    console.log("heading dataaaaaaaaaaaaaaaaaaaaaa", data);
    this.setState({ user: data.user });
  }

  logUserOut = () => {
    console.log("clearrrd");
    localStorage.clear();
    Router.push("/");
  };

  render() {
    const { user } = this.state;
    console.log("render data", user);
    return (
      <Layout>
        <section className="user">
          <div className="user__container">
            <div className="user__details">
              <p className="user__email">restonson@mail.com</p>
              <p className="user__name">reston anderson</p>
            </div>
            <div className="user__star">
              <i class="fas fa-user-check"></i>
            </div>
          </div>
        </section>
        <div className="module">
          <p className="module__header">my isave account</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i class="fab fa-first-order"></i>
                <Link href="/orders">
                  <a className="account__orders">orders</a>
                </Link>
              </div>
              <i class="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
                <i class="fab fa-first-order"></i>
                <Link href="/saveditems">
                  <a className="account__orders">saved items</a>
                </Link>
              </div>
              <i class="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="module">
          <p className="module__header">account settings</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i class="fab fa-first-order"></i>
                <Link href="/user/edit">
                  <a className="account__orders">details</a>
                </Link>
                <p className="account__orders"></p>
              </div>
              <i class="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
                <i class="fab fa-first-order"></i>
                <Link href="/user/changepassword">
                  <a className="account__orders">change paswword</a>
                </Link>
              </div>
              <i class="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="logout">
          <Link href="/">
            <a onClick={this.logUserOut} className="logout__word">
              logout
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Heading;
