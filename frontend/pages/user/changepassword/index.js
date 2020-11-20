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
          <p className="secondaryheading__word">change password</p>
        </div>
        <form className="form" action="" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              current password
            </label>
            <input className="form__input" type="password" name="currentpassword" value="" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              new password
            </label>
            <input className="form__input" type="password" name="newpassword" value="" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              retype new password
            </label>
            <input className="form__input" type="email" name="email" value="" />
          </div>

          <button className="form__button">save</button>
        </form>
      </section>
    );
  }
}

export default edit;
