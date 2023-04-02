import { purple } from "@mui/material/colors";

import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
      dark: "#hsl(257, 27%, 26%)",
    },
    secondary: {
      main: "hsl(0, 87%, 67%)",
    },
    neutral: {
      light: "#hsl(0, 0%, 75%)",
      main: "#hsl(257, 7%, 63%)",
      dark: "#hsl(255, 11%, 22%)",
      contrastText: "#hsl(260, 8%, 14%)",
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
