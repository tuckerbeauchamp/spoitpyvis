import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className="container-fluid">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
