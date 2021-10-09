import React from "react";
import Note from "./Note";
import Editable from "./Editable";

export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => (
  <ul className="notes">
    <h1>Notes </h1>
    {notes.map(({ id, editing, task, color }) => (
      <li key={id}>
        <Note
          style={{ backgroundColor: color }}
          className="note"
          onClick={onNoteClick.bind(null, id)}
        >
          <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)}
          />
          <button className="delete" onClick={onDelete.bind(null, id)}>
            x
          </button>
        </Note>
      </li>
    ))}
  </ul>
);
