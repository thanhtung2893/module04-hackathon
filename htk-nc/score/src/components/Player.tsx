import React from "react";
import { FaTrophy } from "react-icons/fa";

interface Player {
    id: number;
    name: string;
    score: number;
}
interface PlayerProps {
    player: Player;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    onDelete: (id: number) => void;
    isHighestScore: boolean;
}
const Player: React.FC<PlayerProps> = ({ player, onIncrement, onDecrement, onDelete, isHighestScore }) => {
    return (
        <div className={`player ${isHighestScore ? "highlight" : ""}`}>
            <button style={{background:"green"}} className="player-buttons" onClick={() => onDelete(player.id)}>x</button>
            <div className="trophy-icon-container">
                <FaTrophy style={{margin:10}} className={`trophy-icon ${isHighestScore ? "highlight" : ""}`} />
            </div>
            <span className="player-name">{player.name}</span>
            <button style={{background:"green"}} className="player-buttons" onClick={() => onDecrement(player.id)}>-</button>
            <span style={{width:20}} className="player-score">{player.score}</span>
            <button style={{background:"green"}} className="player-buttons" onClick={() => onIncrement(player.id)}>+</button>
        </div>
    );
};
export default Player;
