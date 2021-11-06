import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare module '@mui/material/styles' {
  interface Palette {
    palette: {
      primary: {
        main: string,
        light: string
      }
    }
  }
  interface PaletteOptions {
    palette?: {
      primary?: {
        main?: string,
        light?: string,
      }
    }
  }
  interface Typography {
    typography: {
      fontFamily: string
    }
  }
  interface TypographyOptions {
    typography: {
      fontFamily?: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCD1B",
      light: "#FAF1D3"
    },
    secondary: {
      main: "#7C684B",
      light: "#BFAD93"
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
