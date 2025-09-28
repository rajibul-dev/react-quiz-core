import { useGameState } from "../hooks/useGameState";

export default function MenuScreen() {
  const { startGame } = useGameState();
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Quiz Game
      </h1>
      <p className="mb-6 text-lg text-center">
        Test your knowledge and have fun!
      </p>
      <button
        onClick={() => {
          startGame();
        }}
        className="bg-violet-700 cursor-pointer text-white text-lg px-4 py-2 rounded"
      >
        Start Game
      </button>
    </>
  );
}
