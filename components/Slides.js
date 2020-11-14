import React from "react";

export default class Slides extends React.Component {
  render() {
    return (
      <section className="slides">
        <ul className="slides__items">
          <li className="slides__list">
            <img className="slides__img" src="/static/lili.jpg" alt="hero" />
            <p className="slides__text">
              <a href="" className="slides__text--link">
                shop now
              </a>
            </p>
            <p className="slides__bottomtext">
              flash sale<span className="slides__textspan">explore your taste</span>{" "}
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
