import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Form } from "./Form/Form";
import Notes from "./Notes/Notes";
import Loader from "./Loader/Loader";

export const Home = () => {
  // const notes = new Array(3)
  //   .fill("")
  //   .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));

  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form />

      <hr />

      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote}/>}
    </>
  );
};
