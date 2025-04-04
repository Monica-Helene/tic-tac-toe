import "./index.css";

function getTitle(value) {
  switch(value) {
    case "X":
      return "Kryss"
    case "O":
      return "Sirkel"
    default:
      return "Åpent felt";
  }
}

function Square({ value, onSquareClick }) {
  
  
  return (
    <button 
      title={getTitle(value)}
      style={{ color: value === "X" ? "blue" : "red" }}
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  
);

}

export default Square;
