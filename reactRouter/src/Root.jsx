import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default root;
