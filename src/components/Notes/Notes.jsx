import React from "react";
import Note from "./Note";
import Editable from "./Editable";

export default ({
  notes,
  filteredNotes,
  searchValue,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => (
  <div className="notes" useRef="grid">
    {searchValue != "" ? (
      <div>
        {filteredNotes.map(({ id, editing, task, color }) => (
          <div key={id}>
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
              <button
                style={{ backgroundColor: color }}
                className="delete"
                onClick={onDelete.bind(null, id)}
              >
                x
              </button>
            </Note>
          </div>
        ))}{" "}
      </div>
    ) : (
      <div>
        {notes.map(({ id, editing, task, color }) => (
          <div key={id}>
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
              <button
                style={{ backgroundColor: color }}
                className="delete"
                onClick={onDelete.bind(null, id)}
              >
                x
              </button>
            </Note>
          </div>
        ))}{" "}
      </div>
    )}
  </div>
);
