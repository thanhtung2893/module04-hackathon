// components/NoteForm.tsx
import React, { useState } from "react";
import { Note } from "../utils/type";
import { FaPlusSquare } from "react-icons/fa";
interface NoteFormProps {
  onAddNote: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddNote = (): void => {
    if (content.trim() === "") {
      setError("Vui lòng nhập nội dung!");
      return;
    }

    const newNote:any = { id: Date.now(), content };
    onAddNote(newNote);
    setContent("");
    setError("");
  };

  return (
    <div className="note-form" >
        <div style={{ color: "gray" }}>title</div>
      <textarea placeholder="take a note..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleAddNote}><FaPlusSquare /></button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NoteForm;
