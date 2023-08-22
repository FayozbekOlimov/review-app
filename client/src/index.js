import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContextProvider";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
);
