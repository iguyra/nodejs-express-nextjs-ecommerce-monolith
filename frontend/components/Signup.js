import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default class Slides extends React.Component {
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
    console.log("on signup");
    const { data } = await axios.post("http://localhost:3000/api/users/signup", { email, password });

    console.log("signup user", data);

    this.setState({ data: data });
  };

  render() {
    return (
      <Layout>
        <section className="signup" id="signup">
          <Link>
            <a href="/index" className="signup__sitename" id="sitename1">
              iguyra <span>&larr;</span>
            </a>
          </Link>
          <form className="signup__form" action="" onSubmit={this.handleSubmit}>
            <label className="signup__label" htmlFor="email">
              email
              <input
                className="signup__input"
                type="email"
                id="email1"
                placeholder="eg: res@res.com"
                onChange={this.handleChange}
              />
            </label>
            <label className="signup__label" htmlFor="password">
              password
              <input
                className="signup__input"
                type="password"
                id="password1"
                placeholder="type password"
                onChange={this.handleChange}
              />
            </label>
            <label className="signup__label" htmlFor="password">
              confirm password
              <input
                className="signup__input"
                type="password"
                id="confirmpassword"
                placeholder="type password"
                onChange={this.handleChange}
              />
            </label>

            <button className="signup__button">create account</button>

            <div className="signup__details">
              <Link>
                <a className="signup__register" href="/login" id="backlogin">
                  login
                </a>
              </Link>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
}
