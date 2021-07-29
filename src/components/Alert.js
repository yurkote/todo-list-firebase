import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={500}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Attention! </strong>
        {alert.text}
      </div>
    </CSSTransition>
  );
};

export default Alert;
