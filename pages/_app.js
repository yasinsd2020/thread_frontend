import "../styles/globals.css";
import Header from "../components/commonComponents/header";
import Footer from "../components/commonComponents/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
