import GameOverScreen from "./components/GameOverScreen";
import MenuScreen from "./components/MenuScreen";
import PlayingScreen from "./components/PlayingScreen";
import { useGameState } from "./hooks/useGameState";

function App() {
  const { state: gameState } = useGameState();
  const { scene } = gameState;

  return (
    <div className="max-w-3xl flex flex-col items-center justify-center h-dvh mx-auto p-4">
      {scene === "MENU_SCREEN" && <MenuScreen />}

      {scene === "PLAYING_SCREEN" && (
        <div>
          <PlayingScreen />
        </div>
      )}

      {scene === "GAME_OVER_SCREEN" && <GameOverScreen />}
    </div>
  );
}

export default App;
