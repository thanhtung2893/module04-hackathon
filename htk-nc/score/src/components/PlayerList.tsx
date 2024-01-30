import React, { useEffect, useState } from "react";
import Player from "./Player";
interface PlayerListProps {
    players: Player[];
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    onDelete: (id: number) => void;
}
const PlayerList: React.FC<PlayerListProps> = ({ players, onIncrement, onDecrement, onDelete }) => {
    const highestScorePlayer = players.reduce((prev, current) => (current.score > prev.score ? current : prev), players[0]);
    const [totalPlayers, setTotalPlayers] = useState<number>(0);
    const [totalPoints, setTotalPoints] = useState<number>(0);
    useEffect(() => {
        const sumPoints = () => {
            setTotalPlayers(players.length);
            setTotalPoints(players.reduce((a, b) => a + b.score, 0));
        };
        sumPoints();
    }, [players]);

    return (
        <div>
            <div className="list-info">
            <div >
                <p style={{color:"white",marginLeft:10}}>Total Players: {totalPlayers}</p>
                <p style={{color:"white",marginLeft:10}}>Total Points: {totalPoints}</p>
            </div>
            <div className="point">Bảng điểm</div>
            </div>
            {players.length === 0 ? (
                <h3 style={{textAlign:"center"}}>không có người chơi nào!!!</h3>
            ) : (
                <>
                    <div className="player-list">
                        {players.map((player) => (
                            <Player
                                key={player.id}
                                player={player}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                onDelete={onDelete}
                                isHighestScore={player.id === highestScorePlayer.id}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PlayerList;
