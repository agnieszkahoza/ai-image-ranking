import { Button, Typography, AppBar, Toolbar, Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <AppBar position="sticky" color="white" elevation={0} 
    sx={{
    backgroundColor: '#fff',
    borderBottom: '1px solid #e0e0e0',
    zIndex: (theme) => theme.zIndex.drawer + 1,
  }}>
      <Toolbar>
      <Typography align="left" variant="h6" sx={{ flexGrow: 1, pl: 2 }}>Ai Ranking </Typography>
      <Box sx={{ display: 'flex', gap: 1, pl: 2  }}>
      <Button variant={ pageName === 'hot' ? 'contained' : 'text'} component={NavLink} to="/hot">HOT</Button>
      <Button variant={ pageName === 'regular' ? 'contained' : 'text'} component={NavLink} to="/regular">Regular</Button>
      <Button variant={ pageName === 'add' ? 'contained' : 'text'} component={NavLink} to="/add">Add</Button>  
      </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;