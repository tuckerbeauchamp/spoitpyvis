import React from "react";
import { useStoreContext } from "store";

import styles from "./Home.module.scss";

function Home() {
  const [state, dispatch] = useStoreContext();
  console.log(state);
  return (
    <div id="home" className={styles.home}>
      <h1>Welcome to the home page</h1>
      <button
        onClick={() => dispatch({ type: "UPDATE_TOKEN", payload: "testing" })}
      >
        Click me!
      </button>
    </div>
  );
}

export default Home;
