import { useState } from "react";
import { createTheme } from "@mui/material";
import "./App.css";
import Homepage from "./pages/Homepage";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-family)",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
