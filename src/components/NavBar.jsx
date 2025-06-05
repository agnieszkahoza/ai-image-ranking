import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function NavBar({ tabValue, handleTabChange, mode, handleModeToggle }) {
  const location = useLocation();
  const pageName = location.pathname.substring(1);
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography align="left" variant="h6" sx={{ flexGrow: 1, pl: 2 }}>
          Ai Ranking{" "}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, pl: 2 }}>
          <Button
            variant={pageName === "hot" ? "contained" : "text"}
            component={NavLink}
            to="/hot"
          >
            HOT
          </Button>
          <Button
            variant={pageName === "regular" ? "contained" : "text"}
            component={NavLink}
            to="/regular"
          >
            Regular
          </Button>
          <Button
            variant={pageName === "add" ? "contained" : "text"}
            component={NavLink}
            to="/add"
          >
            Add
          </Button>
        </Box>
        <Box sx={{ ml: 4 }}>
          <FormControlLabel
            control={
              <Switch
                checked={mode === "dark"}
                onChange={handleModeToggle}
                color="primary"
              />
            }
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
