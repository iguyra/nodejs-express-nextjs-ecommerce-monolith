import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import AddToCartButton from "../../components/cart/AddToCartButton";
import products from "../../data/products.json";

const productpage = (props) => {
  const { product } = props;

  return (
    <Layout>
      <main>
        <section className="productpage">
          <div className="productpage__imgcontainer" id="imgcontainer">
            <img src={product.image} alt="" className="productpage__img" />

            <img src="/static/llili2.jpg" alt="" className="productpage__img" />
            <img src="/static/llili2.jpg" alt="" className="productpage__img" />
          </div>

          <div className="productpage__productimgzoom" id="productimgzoom">
            <div className="productpage__zoomimg">
              <img src="/static/llili2.jpg" alt="" className="productpage__zoom" />
              <img src="/static/llili2.jpg" alt="" className="productpage__zoom" />
              <img src="/static/llili2.jpg" alt="" className="productpage__zoom" />
            </div>
            <div className="close" id="close">
              x
            </div>
          </div>

          <div className="productpage__detail">
            <p className="productpage__name">{product.name}</p>
            <p className="productpage__price">GH {product.price}</p>
          </div>

          <div className="productpage__descriptionbox">
            <p className="productpage__title">description</p>
            <p className="productpage__description">{product.description}</p>
          </div>
        </section>

        <section className="addtocart">
          <div className="addtocart__container">
            <div className="addtocart__call">
              <a href="#" className="addtocart__calllink">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
            <div className="addtocart__add">
              {/* <a onClick={addToCart} href="#" className="addtocart__addlink">
                add to cart
              </a> */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </section>

        <section className="return">
          <div className="return__container">
            <p className="return__icon">
              <i className="fas fa-truck"></i>
            </p>
            <p className="return__phrase">delievers within 3 days</p>
          </div>

          <div className="return__container">
            <p className="return__icon">
              <i className="fas fa-undo-alt"></i>
            </p>
            <p className="return__phrase">free return within 6 days</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticProps(context) {
  // const res = await fetch("http://localhost:3000/api/products");
  // const data = await res.json();

  const id = +context.params.product;

  // const products = data.product;
  const product = products.find((product) => {
    return product._id === id;
  });
  console.log(product, "id", id);

  return {
    props: { product }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // const res = await fetch("http://localhost:3000/api/products");
  // const data = await res.json();
  // const product = data.product;

  const paths = products.map((product) => ({
    params: { product: product._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default withRouter(productpage);
