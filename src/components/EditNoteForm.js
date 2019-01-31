import React, { useState, useEffect } from "react";

export default function EditNoteForm(props) {
  const [note, setNote] = useState(props.currentNote);

  // Handle input
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  useEffect(
    () => {
      setNote(props.currentNote);
    },
    [props]
  );

  return (
    <div className="column">
      <h3 className="title is-4">Edit Note</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          // Require note title and body
          props.updateNote(note.id, note);
        }}
      >
        <div className="field">
          <label className="label">Title:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="My new note . . . "
              name="title"
              value={note.title}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Body:</label>
          <div className="control">
            <textarea
              className="textarea"
              type="textarea"
              placeholder="Lorem ipsum dolar sit amet . . ."
              name="body"
              value={note.body}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Update Note</button>
            <button
              className="button is-grey"
              onClick={() => props.setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
