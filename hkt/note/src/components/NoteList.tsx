// components/NoteList.tsx
import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";
import { getNotesFromLocalStorage, saveNotesToLocalStorage } from "../utils/stogare";
import { Note } from "../utils/type";

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const savedNotes = getNotesFromLocalStorage();
    setNotes(savedNotes);
  }, []);

  const handleDeleteNote = (id: number): void => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const handleAddNote = (newNote: Note): void => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <div>
        <div className="note-form-container">
        <NoteForm onAddNote={handleAddNote} />
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDeleteNote={handleDeleteNote} />
        ))}
      </div>
      
    </div>
  );
};

export default NoteList;
