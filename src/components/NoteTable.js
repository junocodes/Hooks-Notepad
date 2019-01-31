import React from "react";

export default function NoteTable(props) {
  return (
    <div className="column">
      <h3 className="title is-4">Notes</h3>
      <table className="table is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.notes.length > 0 ? (
            props.notes.map(note => (
              <tr>
                <td>{note.title}</td>
                <td>
                  <button
                    className="button is-warning is-small"
                    onClick={() => {
                      props.editRow(note);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button is-danger is-small"
                    onClick={() => props.deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Add your first note.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
