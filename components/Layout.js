import Heading from "./Heading";
import AppProvider from "../context/appContext";

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <Heading />
      {children}
    </AppProvider>
  );
};

export default Layout;
