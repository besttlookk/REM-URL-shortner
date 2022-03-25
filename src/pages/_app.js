import TopButton from "../components/TopButton";
import AppProvider from "../contexts/appContext";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="min-h-screen font-primary">
        <TopButton />

        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default MyApp;
