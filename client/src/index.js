import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { StoreProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
