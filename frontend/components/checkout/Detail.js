import React, { useState } from "react";

const Detail = () => {
  const [input, setInput] = useState();

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    localStorage.setItem("inputs", JSON.stringify(input));
  };
  console.log(input);

  if (process.browser) {
  }

  return (
    <section className="details" id="details">
      <ul className="steps">
        <li className="steps__list active">details</li>
        <li className="steps__list">shipping</li>
        <li className="steps__list">pay</li>
      </ul>
      <div className="details__container">
        <div className="details__group">
          <label htmlFor="firstname" className="details__name">
            first name
          </label>
          <input
            onChange={(event) => handleOnChange(event)}
            id="firstname"
            name="firstname"
            className="details__input"
            placeholder="res"
            type="text"
          />
        </div>
        <div className="details__group">
          <label htmlFor="lastname" className="details__name">
            last name
          </label>
          <input
            onChange={handleOnChange}
            id="lastname"
            name="lastname"
            className="details__input"
            placeholder="jo"
            type="text"
          />
        </div>
        <div className="details__group">
          <label htmlFor="email" className="details__name">
            email address
          </label>
          <input
            onChange={handleOnChange}
            id="email"
            name="email"
            className="details__input"
            placeholder="res@res.com"
            type="email"
          />
        </div>
        <div className="details__group">
          <label htmlFor="number" className="details__name">
            phone number
          </label>
          <input
            onChange={handleOnChange}
            id="number"
            name="number"
            className="details__input"
            placeholder="0200000000"
            type="number"
          />
        </div>
        {/* <div className="details__next">
          <a href="#" className="details__next--link" id="proceeddetails">
            next
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Detail;
