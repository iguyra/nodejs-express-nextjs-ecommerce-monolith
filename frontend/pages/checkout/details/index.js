import React, { useContext, useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Detail from "../../../components/checkout/Detail";
import Shipping from "../../../components/checkout/Shipping";
import Pay from "../../../components/checkout/Pay";
import { AppContext } from "../../../context/appContext";

const details = () => {
  const [products, setProducts] = useState([]);
  const [openPay, setOpenPay] = useState(false);

  console.log(products);

  useEffect(() => {
    let cart = localStorage.getItem("isavecart");
    cart = JSON.parse(cart);
    setProducts(cart);
  }, []);

  return (
    <Layout>
      <Detail />
      <Shipping setOpenPay={setOpenPay} />
      {openPay ? <Pay cart={products} /> : ""}
    </Layout>
  );
};

export default details;
