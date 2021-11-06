import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

declare module "@mui/material/styles" {
  interface Palette {
    palette: {
      primary: {
        main: string;
        light: string;
      };
    };
  }
  interface PaletteOptions {
    palette?: {
      primary?: {
        main?: string;
        light?: string;
      };
    };
  }
  interface Typography {
    typography: {
      fontFamily: string
      fontSize?: number
      fontWeightLight?: number
      fontWeightHeavy?: number
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCD1B",
      light: "#FAF1D3",
    },
    secondary: {
      main: "#7C684B",
      light: "#BFAD93"
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 300,
    fontWeightMedium: 700
  }
})

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
