import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TimerProvider } from "./hooks/useTimer.tsx";
import { GameStateProvider } from "./hooks/useGameState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TimerProvider>
      <GameStateProvider>
        <App />
      </GameStateProvider>
    </TimerProvider>
  </StrictMode>
);
