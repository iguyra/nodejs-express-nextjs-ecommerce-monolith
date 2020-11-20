const { default: Layout } = require("../../Layout");

const EmptyCart = () => {
  return (
    <Layout>
      <section className="cart">
        <div className="cart__description">
          <i className="fas fa-shopping-cart"></i>
          <p className="cart__empty">your cart is empty</p>
        </div>
        <div className="cart__details">
          <p className="cart__phrase">
            have an account ?
            <a className="cart__login" href="/login">
              login
            </a>
            to view items in your cart
          </p>
        </div>

        <div className="">{/* <p>{user.name}</p> */}</div>

        <p className="cart__shopping">start shopping</p>

        <div className="cart__help">
          <p className="cart__chat">chat representative</p>
          <p className="cart__call">need help ? call us</p>
        </div>
      </section>
    </Layout>
  );
};

export default EmptyCart;
