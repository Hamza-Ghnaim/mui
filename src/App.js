import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import "typeface-poppins";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Summit from "./components/Summit";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";

export const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: "#2acfcf",
      dark: "#3b3054",
    },
    secondary: {
      main: "#f46262",
    },
    neutral: {
      light: "#bfbfbf",
      main: "#9e9aa7",
      dark: "#35323e",
      contrastText: "#232127",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar theme={theme} />
        <Header theme={theme} />
        <Overlay theme={theme} />
      </Container>
      <Summit theme={theme} />
      <Boost theme={theme} />
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
