import React from "react";
import Router from "next/router";
import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";

class login extends React.Component {
  state = {
    email: "",
    password: "",
    data: {},
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    console.log("email", email, password);
    console.log("on login");
    const { data } = await axios.post("xxxxxxxxx/api/users/login", { email, password });

    localStorage.setItem("token", data.token);

    console.log("login user:", data.token);
    Router.push("/");
    this.setState({ data: data });
  };

  render() {
    const { data } = this.state;
    return (
      <Layout>
        <section className="siginin" id="signin">
          <Link href="/">
            <a className="siginin__sitename" id="sitename">
              iguyra <span>&larr;</span>
            </a>
          </Link>
          <form className="siginin__form" onSubmit={this.handleSubmit} action="">
            <label className="siginin__label" htmlFor="email">
              email
              <input
                className="siginin__input"
                name="email"
                type="email"
                id="email"
                placeholder="eg: res@res.com"
                onChange={this.handleChange}
              />
            </label>
            <label className="siginin__label" htmlFor="password">
              password
              <input
                className="siginin__input"
                name="password"
                type="password"
                id="password"
                placeholder="type password"
                onChange={this.handleChange}
              />
            </label>

            <button className="siginin__button">login</button>

            <div className="siginin__details">
              <Link href="#">
                <a className="siginin__passwordforgot">forgot your password ?</a>
              </Link>
              <Link href="/signup">
                <a className="siginin__register" id="createaccount">
                  create an account
                </a>
              </Link>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
}

export default login;
