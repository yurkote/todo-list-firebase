import React, {useState, useContext} from "react";
import AlertContext from "../../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      alert.show("Todo is added", "success");
      setValue("");
    } else {
      alert.show("Set what to do")
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control inp_placeholder"
          placeholder="Add a title of Todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
