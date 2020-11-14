import App from "next/app";

import "../sass/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="MyApp">
      <Component {...pageProps} />
    </div>
  );
};

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
