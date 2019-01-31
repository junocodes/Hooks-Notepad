import React, { useState } from "react";

export default function AddNoteForm(props) {
  // Create and set initial state
  const initialFormState = { id: null, title: "", body: "" };
  const [note, setNote] = useState(initialFormState);

  // Handle input
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div className="column">
      <h3 className="title is-4">Add Note</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          // Require note title and body
          if (!note.title || !note.body) return;

          props.addNote(note);
          setNote(initialFormState);
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

        <div className="field">
          <div className="control">
            <button className="button is-info">Add Note</button>
          </div>
        </div>
      </form>
    </div>
  );
}
