import React from "react";
import { useGameState } from "../hooks/useGameState";
import { TIMER_DURATION, useTimer } from "../hooks/useTimer";
import clsx from "clsx";

export default function PlayingScreen() {
  const {
    state: gameState,
    selectAnswer,
    nextQuestion,
    timeUp,
    restartGame,
    goToMenu,
  } = useGameState();
  const {
    currentQuestionIndex,
    questions,
    score,
    selectedAnswer,
    scene,
    totalCorrect,
  } = gameState;
  const question = questions[currentQuestionIndex];
  const optionTextFromIndex = (index: number) => {
    return String.fromCharCode(65 + index); // 0 -> A, 1 -> B, 2 -> C, 3 -> D
  };
  const isCorrectAnswer = selectedAnswer === question?.answer;

  const { time, isActive } = useTimer();

  return (
    <React.Fragment key={question.id}>
      <span className="text-base text-center text-gray-400 block mb-3 font-semibold">
        {question.category}
      </span>
      <h2 className="text-3xl text-center leading-11 font-semibold mb-8">
        {currentQuestionIndex + 1}) {question?.question}
      </h2>
      <ul className="grid mx-auto grid-cols-1 max-w-fit md:grid-cols-2 gap-4 mb-4 w-full">
        {question?.options.map((option, index) => (
          <li
            key={option}
            className={clsx(
              `py-3 px-20 cursor-pointer text-center text-xl border bg-gray-800 rounded`,
              {
                "bg-lime-600 text-white font-semibold":
                  selectedAnswer === option && isCorrectAnswer,
                "bg-red-600 font-semibold text-white":
                  selectedAnswer === option && !isCorrectAnswer,
                "border-lime-500 bg-lime-900":
                  question.answer === option &&
                  selectedAnswer &&
                  !isCorrectAnswer,
              }
            )}
            onClick={() => {
              if (scene === "PLAYING_SCREEN" && !selectedAnswer) {
                selectAnswer(option, TIMER_DURATION - time);
                setTimeout(() => {
                  nextQuestion();
                }, 2000);
              }
            }}
          >
            {optionTextFromIndex(index)}. {option}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        {/* time */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div
            className={clsx("text-2xl font-bold", {
              "text-lime-500": isActive,
              "text-gray-500": !isActive,
            })}
          >
            Time: {time}
          </div>
        </div>
        {/* score */}
        <div className="text-center text-lg text-gray-400 font-semibold">
          Score: {score} | Correct Answers: {totalCorrect} / {questions.length}
        </div>
      </div>
    </React.Fragment>
  );
}
