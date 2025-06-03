import { Button, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <nav>
      <Typography variant="h4" className="navbar">Ai Ranking </Typography>
      <Button variant={ pageName === 'hot' ? 'contained' : 'text'} component={NavLink} to="/hot">HOT</Button>
      <Button variant={ pageName === 'regular' ? 'contained' : 'text'} component={NavLink} to="/regular">Regular</Button>
      <Button variant={ pageName === 'add' ? 'contained' : 'text'} component={NavLink} to="/add">Add</Button>
    </nav>
  );
}

export default NavBar;