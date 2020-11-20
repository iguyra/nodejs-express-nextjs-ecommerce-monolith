import React, { useState, useEffect } from "react";

export const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem("isavecart");

      cartData = null !== cartData ? JSON.parse(cartData) : "";
      setCart(cartData);
    }
  }, []);
  console.log("app cart", cart);
  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
