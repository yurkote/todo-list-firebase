import React from "react";

const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small className="pl_2">{new Date().toLocaleDateString()}</small>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
