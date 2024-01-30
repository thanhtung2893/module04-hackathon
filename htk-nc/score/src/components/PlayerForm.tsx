import React, { useState } from "react";
interface PlayerFormProps {
  onAddPlayer: (name: string) => void;
}
const PlayerForm: React.FC<PlayerFormProps> = ({ onAddPlayer }) => {
  const [playerName, setPlayerName] = useState<string>("");

  const handleAddPlayer = (): void => {
    if (playerName.trim() !== "") {
      onAddPlayer(playerName);
      setPlayerName("");
    }
  };
  return (
    <div>
      <input 
      style={{width:650,height:30,margin:10,color:"gray",backgroundColor:"white"}}
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button  onClick={handleAddPlayer} style={{width:130,height:40,color:"black",backgroundColor:"white"}}>Add Player</button>
    </div>
  );
};
export default PlayerForm;
