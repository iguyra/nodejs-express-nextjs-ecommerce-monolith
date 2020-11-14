import React from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../../../components/Heading";
import Layout from "../../../components/Layout";

class edit extends React.Component {
  state = {
    user: {},
  };

  render() {
    return (
      <section className="useredit" id="signup">
        <div className="secondaryheading">
          <p className="secondaryheading__word">account details</p>
        </div>
        <form className="form" action="" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              first name
            </label>
            <input className="form__input" type="text" name="firstname" value="Reston" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              last name
            </label>
            <input className="form__input" type="text" name="lastname" value="Anderson" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              email
            </label>
            <input className="form__input" type="email" name="email" value="resnderson@gmail.com" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              phone number
            </label>
            <input className="form__input" type="number" name="number" value="020000000" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              gender
            </label>
            <select name="" id="">
              <option value="">male</option>
              <option value="">female</option>
            </select>
          </div>

          <button className="form__button">save</button>
        </form>
      </section>
    );
  }
}

export default edit;
