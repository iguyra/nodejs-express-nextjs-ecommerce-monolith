import { withRouter } from "next/router";
import axios from "axios";

import { useContext } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../context/appContext";
import fetch from "isomorphic-unfetch";

const productpage = (props) => {
  const { product } = props;
  const [cart, setCart] = useContext(AppContext);

  console.log("CART", cart, product);

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
              <a href="#" className="addtocart__addlink">
                add to cart
              </a>
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
  // const id = context.req.url.split("-")[1];
  // console.log("id", !process.browser, id);
  if (process.browser) {
    console.log("from client", context);
  }

  // const res = await fetch("http://localhost:3000/api/products");
  // const data = await res.json();

  // const products = data.product;
  // const product = products.find((el) => {
  //   return el._id === id;
  // });

  console.log(context);

  const product = {
    res: "res",
  };
  return {
    props: { product }, // will be passed to the page component as props
  };
}

export default withRouter(productpage);

// export async function getServerSideProps(context) {
//   const id = context.req.url.split("-")[1];
//   console.log("id", !process.browser, id);
//   if (process.browser) {
//     console.log("from client");
//   }

//   const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();

//   const products = data.product;
//   const product = products.find((el) => {
//     return el._id === id;
//   });

//   console.log(product);
//   return {
//     props: { product }, // will be passed to the page component as props
//   };
// }
