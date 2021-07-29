import React, { useEffect, useReducer } from "react";
import axios from "axios";
import FirebaseContext from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
  let initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    let payload;
    if (res.data != null || undefined) {
      payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });
    }

    dispatch({ type: FETCH_NOTES, payload });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toLocaleDateString(),
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({ type: ADD_NOTE, payload });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  useEffect(() => {
    if (state.notes == undefined) {
      state.notes = [];
    }
  }, [!state.notes]);

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;