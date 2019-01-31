import React, { useState } from "react";
import Header from "./components/Header";
import NoteTable from "./components/NoteTable";
import AddNoteForm from "./components/AddNoteForm";
import EditNoteForm from "./components/EditNoteForm";

export default function App() {
  // Creating initial notes and setting intial state.
  const notesData = [
    {
      id: 1,
      title: "Are IPA's smashed pine needles?",
      body:
        "Lorem ipsum dolor amet squid wolf chambray, kinfolk palo santo fixie yuccie austin leggings activated charcoal succulents narwhal post-ironic literally scenester. Fashion axe butcher tilde cliche aesthetic succulents VHS pickled typewriter post-ironic godard copper mug asymmetrical etsy. Butcher VHS cliche synth cold-pressed."
    },
    {
      id: 2,
      title: "Petchouli should smell different.",
      body:
        "Lorem ipsum dolar intelligentsia taxidermy retro waistcoat jianbing. Cornhole banh mi, sriracha 8-bit truffaut quinoa. Seitan pitchfork venmo, trust fund cold-pressed normcore gochujang portland pabst yuccie glossier authentic meggings disrupt. Fam hammock post-ironic polaroid vaporware, heirloom glossier blog echo park."
    }
  ];

  const [notes, setNotes] = useState(notesData);

  const addNote = note => {
    // A work-around for generating unique IDs
    note.id = notes.length + 1;
    // Append note to existing notes array.
    setNotes([...notes, note]);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, title: "", body: "" };
  const [currentNote, setCurrentNote] = useState(initialFormState);
  const editRow = note => {
    setEditing(true);
    setCurrentNote({ id: note.id, title: note.title, body: note.body });
  };

  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
  };

  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <div className="columns is-variable is-5">
            {editing ? (
              <EditNoteForm
                editing={editing}
                setEditing={setEditing}
                currentNote={currentNote}
                updateNote={updateNote}
              />
            ) : (
              <AddNoteForm addNote={addNote} />
            )}
            <NoteTable
              notes={notes}
              editRow={editRow}
              deleteNote={deleteNote}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
