import React from "react";
import "./app.scss";
import styles from "./app.module.scss"

function App () {

  return (
    <>
    <div className ="color">
      Привет мир
    </div>
    <div className = {styles.color}>
      Привет мир 2
    </div>
    </>
  )
};

export default App;
