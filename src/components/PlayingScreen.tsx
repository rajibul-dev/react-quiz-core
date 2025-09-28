import React, { useEffect, useState } from "react";
import { useGameState } from "../hooks/useGameState";
import { TIMER_DURATION, useTimer } from "../hooks/useTimer";
import clsx from "clsx";

export default function PlayingScreen() {
  const { state: gameState, selectAnswer, nextQuestion } = useGameState();

  const {
    currentQuestionIndex,
    questions,
    score,
    selectedAnswer,
    scene,
    totalCorrect,
  } = gameState;

  const { time, isActive, reCount } = useTimer();

  const question = questions[currentQuestionIndex];
  const [highlightAnswerOnTimeUp, setHighlightAnswerOnTimeUp] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [highestScore, setHighestScore] = useState(0);

  // load highest score from localStorage
  useEffect(() => {
    const storedHighScore = Number(localStorage.getItem("highScore") || 0);
    setHighestScore(storedHighScore);
  }, []);

  const optionTextFromIndex = (index: number) =>
    String.fromCharCode(65 + index); // 0 -> A, 1 -> B...

  const isCorrectAnswer = selectedAnswer === question?.answer;

  // shuffle options when new question comes in
  useEffect(() => {
    if (question?.options) {
      setShuffledOptions([...question.options].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  // handle time up
  useEffect(() => {
    if (time === 0 && scene === "PLAYING_SCREEN" && !selectedAnswer) {
      setHighlightAnswerOnTimeUp(true);

      const timeout = setTimeout(() => {
        setHighlightAnswerOnTimeUp(false);
        nextQuestion();
        reCount(); // ensure timer resets for next question
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [time, scene, selectedAnswer, nextQuestion, reCount]);

  // handle selecting answer
  const handleSelect = (option: string) => {
    if (scene !== "PLAYING_SCREEN" || selectedAnswer || !isActive) return;

    selectAnswer(option, TIMER_DURATION - time);

    setTimeout(() => {
      nextQuestion();
      reCount();
    }, 2000);
  };

  return (
    <React.Fragment key={question.id}>
      <span className="text-base text-center text-gray-400 block mb-3 font-semibold">
        {question.category}
      </span>

      <h2 className="text-3xl text-center max-sm:text-2xl max-sm:leading-9 leading-11 font-semibold mb-8">
        {currentQuestionIndex + 1}) {question?.question}
      </h2>

      <ul className="grid mx-auto grid-cols-1 max-w-fit md:grid-cols-2 gap-4 mb-4 w-full">
        {shuffledOptions.map((option, index) => (
          <li
            key={option}
            className={clsx(
              `py-4 px-18 cursor-pointer leading-7.5 text-center text-xl border bg-gray-800 rounded text-white transition-colors`,
              {
                "hover:border-violet-400":
                  !selectedAnswer && !highlightAnswerOnTimeUp,
                "bg-lime-600 font-semibold":
                  selectedAnswer === option && isCorrectAnswer,
                "bg-red-600 font-semibold":
                  selectedAnswer === option && !isCorrectAnswer,
                "!border-lime-500 bg-lime-900":
                  (question.answer === option &&
                    selectedAnswer &&
                    !isCorrectAnswer) ||
                  (highlightAnswerOnTimeUp && question.answer === option),
              }
            )}
            onClick={() => handleSelect(option)}
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
          Score: {score} | Correct Answers: {totalCorrect} / {questions.length}{" "}
          | Highest score: {highestScore}
        </div>

        <p className="text-center mt-4 text-lg font-semibold text-gray-400">
          Faster answers give you more points!
        </p>
      </div>
    </React.Fragment>
  );
}
