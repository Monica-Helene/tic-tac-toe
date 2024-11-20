import { useState } from 'react';
import Header from "./Header.js"
import Footer from './Footer.js';
import Square from './Square.js';
import calculateWinner from './calculateWinner.js';


function Board({ xIsNext, squares, onPlay, playerNames }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const isBoardFull = (board) => {
    return board.every(cell => cell !== null);
  };

  const winner = squares ? calculateWinner(squares) : null; 
  let status;
  if (winner) {
    status = 'Vinner: ' + (winner === 'X' ? playerNames[0] : playerNames[1]);
  } else if (isBoardFull(squares)) {
    status = "Uavgjort";
  } else {
    status = 'Neste spiller: ' + (xIsNext ? playerNames[0] : playerNames[1]);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}


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

