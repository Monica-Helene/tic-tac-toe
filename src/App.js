import { useState } from 'react';
import Header from "./Header.js"
import Footer from './Footer.js';
import Board from './Board.js';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerNames, setPlayerNames] = useState(() => {
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

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Tilbake til trekk ' + move;
    } else {
      description = 'Start spillet på nytt ';
    }
    return (
      <li key={move}>
        <button className="movebutton" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    
     <div>
      <Header />
       <div>
        </div>
         <div className="game">
           <div className="game-board">
              <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} playerNames={playerNames} />
            </div>
        <div className="game-info">
            <li>{moves}</li> 
        </div>
      </div>
      <Footer />
    </div>
  );
}