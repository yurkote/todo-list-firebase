import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Notes = ({ notes, onRemove }) => {
  if (notes == null || undefined) {
    return (
      <ul className="list-group">
        <li className="list-group-item note">
          <div>
            <strong>There is no notes</strong>
          </div>
        </li>
      </ul>
    );
  } else
    return (
      <TransitionGroup component="ul" className="list-group">
        {notes.map((note) => (
          <CSSTransition key={note.id} classNames={'note'} timeout={500}>
            <li className="list-group-item note">
              <div>
                <strong>{note.title}</strong>
                <small className="pl_2">{note.date}</small>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(note.id)}
              >
                X
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
};

export default Notes;
