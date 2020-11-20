const Shipping = ({ setOpenPay }) => {
  const handleOpenPay = (e) => {
    e.preventDefault();

    console.log("logged");
    setOpenPay(true);
  };

  return (
    <section className="details shipping" id="shipping">
      <ul className="steps">
        <p className="steps__list ">details</p>
        <p className="steps__list active">shipping</p>
        <p className="steps__list">pay</p>
      </ul>
      <div className="details__container">
        <div className="details__group">
          <label htmlFor="country" className="details__name">
            country
          </label>
          <input
            id="country"
            className="details__input"
            placeholder="eg: Ghana"
            type="text"
          />
        </div>
        <div className="details__group">
          <label htmlFor="delieveryregion" className="details__name">
            delievery region
          </label>
          <select className="select" name="select" id="select">
            <option value="accra">accra</option>
            <option value="kasoa">kasoa</option>
            <option value="weija">weija</option>
          </select>
        </div>
        <div className="details__group">
          <label htmlFor="adress" className="details__name">
            address
          </label>
          <input
            id="adress"
            className="details__input"
            placeholder="eg: 111 bus stop"
            type="email"
          />
        </div>
        <div className="details__group">
          <label htmlFor="notes" className="details__name">
            additional notes
          </label>
          <input
            id="notes"
            className="details__input"
            placeholder="eg: call me"
            type="text"
          />
        </div>
        <div
          onClick={(event) => handleOpenPay(event)}
          className="details__next"
        >
          <a href="#" className="details__next--link" id="shippingproceed">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
