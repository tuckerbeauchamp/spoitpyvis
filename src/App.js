import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/signin';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <main className="container">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
        <Route path="/login">
            <SignIn></SignIn>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
