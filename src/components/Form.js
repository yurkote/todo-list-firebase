import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import FirebaseContext from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Note is added", "success");
        })
        .catch(() => {
          alert.show("Something went wrong, please try again", "danger");
        });
      setValue("");
    } else {
      alert.show("Please, write what to do");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control inp_placeholder"
          placeholder="Add a title of Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;