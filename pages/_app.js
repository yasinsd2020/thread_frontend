import "../styles/globals.css";
import Header from "../components/commonComponents/header";
import Footer from "../components/commonComponents/footer/footer";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Tostify from "../components/commonComponents/tostify/Tostify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="relative min-h-screen w-full">
            <Header />
            <Tostify />
            <Component {...pageProps} />
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
