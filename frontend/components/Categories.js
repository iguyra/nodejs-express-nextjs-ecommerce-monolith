import React from "react";

export default class Categories extends React.Component {
  render() {
    return (
      <section className="categories">
        <div className="categories__text">
          <h6>categories</h6>
        </div>
        <div className="categories__item">
          <a href="/productpage.html" className="categories__list">
            women
          </a>
          <a href="/cartItem.html" className="categories__list">
            men
          </a>
          <a href="#" className="categories__list">
            assoceries
          </a>
        </div>
      </section>
    );
  }
}
