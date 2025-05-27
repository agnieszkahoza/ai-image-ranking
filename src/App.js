import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />

      <div className="App">
        <NavBar />
        {/* <AppRoutes /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
