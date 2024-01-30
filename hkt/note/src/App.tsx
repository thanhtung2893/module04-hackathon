// App.tsx
import React from "react";
import NoteList from "./components/NoteList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Note</h1>
      <NoteList />
    </div>
  );
};

export default App;
