import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import "typeface-poppins";
import NavBar from "./components/NavBar";

const theme = createTheme({
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
        <Box>
          <h1>2</h1>
          <h1>2</h1>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
