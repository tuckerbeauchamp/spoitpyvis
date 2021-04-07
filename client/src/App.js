import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { StoreProvider } from "./store";
import Navbar from "./components/Navbar";
import { views, renderRoute } from "./views";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <main className="container-fluid">
          <Navbar />
          <Switch>{views.map(renderRoute)}</Switch>
        </main>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
