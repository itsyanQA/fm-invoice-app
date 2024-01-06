import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styled/theme";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
