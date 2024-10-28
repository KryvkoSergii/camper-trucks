import css from "./Navigation.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Toaster } from "react-hot-toast";

export default function Navigation() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={css.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <img src={Logo} />
      <div className={css.navigation_container}>
        <nav className={css.navigation}>
          <NavLink to="/" className={path === "/" ? (css.active_link) : (css.passiv_link)}>Home</NavLink>
          <NavLink to="/catalog" className={path === "/catalog" ? (css.active_link) : (css.passiv_link)}>Catalog</NavLink>
        </nav>
      </div>
    </div>
  );
}
