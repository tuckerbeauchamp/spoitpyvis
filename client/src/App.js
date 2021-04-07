import React, { useEffect } from "react";
import { useStoreContext } from "./store";
import { Switch, useHistory } from "react-router-dom";

import Navbar from "./components/Navbar";
import { views, renderRoute } from "./views";

function App() {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store token in state
      dispatch({ type: "UPDATE_TOKEN", payload: token });
      // Clear out token from url
      history.replace("/dashboard");
    }
  }, []);

  console.log("STATE:", state);
  return (
    <main className="container-fluid">
      <Navbar />
      <Switch>{views.map(renderRoute)}</Switch>
    </main>
  );
}

export default App;
