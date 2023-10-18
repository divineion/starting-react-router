import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
