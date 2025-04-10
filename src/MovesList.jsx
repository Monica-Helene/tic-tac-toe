import React from "react";
import "../index.css";

export default function MovesList({ history, jumpTo }) {
  const moves = history.map((squares, move) => {
    const description =
      move > 0 ? `Tilbake til trekk ${move}` : "Start spillet på nytt";
    return (
      <li key={move}>
        <button className="movebutton" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return <ul>{moves}</ul>;
}
