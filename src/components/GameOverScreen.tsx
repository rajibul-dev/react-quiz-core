import { useEffect, useState } from "react";
import { FAST_ANSWER_POINTS, useGameState } from "../hooks/useGameState";
import { format } from "date-fns";

export default function GameOverScreen() {
  const { state: gameState, restartGame } = useGameState();
  const { score, totalCorrect, questions } = gameState;

  const [highestScore, setHighestScore] = useState(0);
  const [highestScoreDate, setHighestScoreDate] = useState<string | null>(null);

  // load from localStorage
  useEffect(() => {
    const highScore = localStorage.getItem("highScore");
    const highScoreDate = localStorage.getItem("highScoreDate");

    if (highScore) setHighestScore(Number(highScore));
    if (highScoreDate) setHighestScoreDate(highScoreDate);
  }, []);

  // update when new high score achieved
  useEffect(() => {
    const storedHighScore = Number(localStorage.getItem("highScore") || 0);

    if (score > storedHighScore) {
      const now = new Date().toISOString();

      localStorage.setItem("highScore", String(score));
      localStorage.setItem("highScoreDate", now);

      setHighestScore(score);
      setHighestScoreDate(now);
    }
  }, [score]);

  return (
    <>
      <h2 className="text-3xl text-center font-semibold mb-4">Quiz ended</h2>
      <div className="text-center text-lg space-y-1 text-gray-400 font-semibold">
        <p>
          You scored: <span className="text-white">{score}</span> out of{" "}
          <span className="text-white">
            {questions.length * FAST_ANSWER_POINTS}
          </span>
        </p>

        <p>
          Correct Answers: <span className="text-white">{totalCorrect}</span> /
          <span className="text-white"> {questions.length}</span>
        </p>

        {highestScore > 0 && (
          <p>
            Highest Score: <span className="text-white">{highestScore}</span>{" "}
            {highestScoreDate && (
              <>
                on{" "}
                <span className="text-white">
                  {format(new Date(highestScoreDate), "dd MMM, yyyy, hh:mm a")}
                </span>
              </>
            )}
          </p>
        )}
      </div>
      <button
        onClick={restartGame}
        className="mt-8 text-lg font-semibold bg-violet-800 px-10 text-white py-2 rounded cursor-pointer hover:bg-violet-700 transition-colors"
      >
        Play Again
      </button>
    </>
  );
}
