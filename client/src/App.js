import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { views, renderRoute } from "./views";

function App() {
  return (
    <BrowserRouter>
      <main className="container-fluid">
        <Navbar />
        <h1>Application</h1>
        <Switch>{views.map(renderRoute)}</Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
