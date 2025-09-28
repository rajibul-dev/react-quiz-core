import { useGameState } from "../hooks/useGameState";

export default function MenuScreen() {
  const { startGame } = useGameState();
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Quiz Game
      </h1>
      <p className="mb-8 text-lg text-gray-300 text-center">
        Test your Anime and Japanese knowledge and have fun!
      </p>
      <button
        onClick={() => {
          startGame();
        }}
        className="bg-violet-800 hover:bg-violet-700 transition-colors px-8 font-semibold text-xl py-3 cursor-pointer text-white rounded"
      >
        Start Game
      </button>
    </>
  );
}
