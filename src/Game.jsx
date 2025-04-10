import { useState } from "react";
import Board from "./Board.jsx";
import MovesList from "./MovesList.jsx";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerNames] = useState(() => {
    const player1 = prompt("Navn på spiller 1:");
    const player2 = prompt("Navn på spiller 2:");
    return [player1 || "Spiller 1", player2 || "Spiller 2"];
  });

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          playerNames={playerNames}
        />
      </div>
      <div className="game-info">
        <MovesList history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}
