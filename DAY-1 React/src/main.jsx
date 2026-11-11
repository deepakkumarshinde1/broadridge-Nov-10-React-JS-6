import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// vDOM => Real DOM

createRoot(document.getElementById("react-session")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// vDOM => Injected to Real DOM
