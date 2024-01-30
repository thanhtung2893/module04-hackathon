// src/App.tsx
import React, { useState } from "react";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";
import "./App.css";

interface Player {
  id: number;
  name: string;
  score: number;
}

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (name: string): void => {
    const newPlayer: Player = {
      id: players.length + 1,
      name,
      score: 0, 
    };
    setPlayers([...players, newPlayer]);
  };

  const incrementScore = (id: number): void => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, score: player.score + 1 } : player
    );
    setPlayers(updatedPlayers);
  };

  const decrementScore = (id: number): void => {
    const updatedPlayers = players.map((player) =>
      player.id === id && player.score > 0 ? { ...player, score: player.score - 1 } : player
    );
    setPlayers(updatedPlayers);
  };

  const deletePlayer = (id: number): void => {
  if (window.confirm("Bạn có chắc chắn muốn xóa người chơi này?")) {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers); 
  }else{
    return
  }
  };

  return (
    <div className="container">
      <PlayerList
        players={players}
        onIncrement={incrementScore}
        onDecrement={decrementScore}
        onDelete={deletePlayer}
      />
      <div className="player-form"><PlayerForm onAddPlayer={addPlayer} /></div>
      
    </div>
  );
};

export default App;
