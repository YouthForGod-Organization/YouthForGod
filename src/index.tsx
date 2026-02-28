// Bootstraps the React app and shared global styles into the root mount node.
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/globals.scss";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(<App />);
