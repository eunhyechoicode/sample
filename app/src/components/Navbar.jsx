import { useLocation, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      value={pathname}
      onChange={handleChange}
    >
      <BottomNavigationAction label="MenuList" value="/"/>
      <BottomNavigationAction label="OrderList" value="/order"/>
    </BottomNavigation>
  )
};

export default Navbar;
