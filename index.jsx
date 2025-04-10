import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./src/App";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Game />);

<meta charset="UTF-8"></meta>;
