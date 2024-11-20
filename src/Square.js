import "./index.css"

function Square({ value, onSquareClick }) {
  return (
    <button style={{ color: value === "X"? "blue" : "red" }} className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;