import React from "react";
import "./app.scss";
import styles from "./app.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar/Navbar";
import Alert from "./components/Alert/Alert";
import AlertState from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
