import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="Navbar">
      <Link className={pathname === '/' ? "active" : ""} to="/" >
        MenuList
      </Link>
      <Link className={pathname === '/order' ? "active" : ""} to="/order">
        OrderList
      </Link>
    </nav>
  );
};

export default Navbar;
