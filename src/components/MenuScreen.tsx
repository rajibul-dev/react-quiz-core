import { useGameState } from "../hooks/useGameState";

export default function MenuScreen() {
  const { startGame } = useGameState();
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Quiz Game
      </h1>
      <p className="mb-6 text-lg text-gray-300 text-center">
        Test your Anime and Japanese knowledge and have fun!
      </p>
      <button
        onClick={() => {
          startGame();
        }}
        className="bg-violet-700 px-8 font-semibold text-xl cursor-pointer text-white py-2 rounded"
      >
        Start Game
      </button>
    </>
  );
}
