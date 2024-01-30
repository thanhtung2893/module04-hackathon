// components/NoteItem.tsx
import React from "react";
import { Note } from "../utils/type";
import { MdDeleteForever } from "react-icons/md";

interface NoteItemProps {
  note: Note;
  onDeleteNote: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDeleteNote }) => {
  const handleDelete = (): void => {
    onDeleteNote(note.id);
  };

  return (
    <div className="note-item">
      <p>{note.content}</p>
      <button onClick={handleDelete}><MdDeleteForever /></button>
    </div>
  );
};

export default NoteItem;
