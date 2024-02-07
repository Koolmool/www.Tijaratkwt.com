import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1A202C", // using Chakra's default gray.800 for dark mode
    800: "#2D3748", // using Chakra's default gray.700 for dark mode
    700: "#4A5568", // using Chakra's default gray.600 for dark mode
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "dark", // set the initial color mode to dark
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
