import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import "../styles/base.css";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
