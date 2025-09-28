import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Question } from "../questions";
import { produce } from "immer";
import {
  FAST_ANSWER_THRESHOLD,
  MEDIUM_ANSWER_THRESHOLD,
  SLOW_ANSWER_THRESHOLD,
  useTimer,
} from "./useTimer";
import allQuestions from "../questions";

export const FAST_ANSWER_POINTS = 7;
export const MEDIUM_ANSWER_POINTS = 5;
export const SLOW_ANSWER_POINTS = 3;

export type Scene =
  | "MENU_SCREEN"
  | "PLAYING_SCREEN"
  | "QUESTION_TIME_UP"
  | "GAME_OVER_SCREEN";

interface GameState {
  scene: Scene;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  totalCorrect: number;
}

interface GameStateContextType {
  state: GameState;
  startGame: () => void;
  selectAnswer: (answer: string, timeItTook: number) => void;
  nextQuestion: () => void;
  timeUp: () => void;
  restartGame: () => void;
  goToMenu: () => void;
}

const initialGameState: GameState = {
  scene: "MENU_SCREEN",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  totalCorrect: 0,
};

const GameStateContext = createContext<GameStateContextType | null>(null);

function reducer(state: GameState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "START_GAME":
        draft.scene = "PLAYING_SCREEN";
        draft.questions = action.payload.questions;

        // Reset game state
        draft.currentQuestionIndex = 0;
        draft.score = 0;
        draft.selectedAnswer = null;
        draft.totalCorrect = 0;
        break;

      case "SELECT_ANSWER":
        draft.selectedAnswer = action.payload.answer;
        const isCorrect =
          draft.selectedAnswer ===
          draft.questions[draft.currentQuestionIndex].answer;

        if (isCorrect) {
          draft.totalCorrect += 1;
          const timeItTook = action.payload.timeItTook;
          if (timeItTook <= FAST_ANSWER_THRESHOLD) {
            draft.score += FAST_ANSWER_POINTS;
          } else if (
            timeItTook >= FAST_ANSWER_THRESHOLD &&
            timeItTook <= MEDIUM_ANSWER_THRESHOLD
          ) {
            draft.score += MEDIUM_ANSWER_POINTS;
          } else if (
            timeItTook >= MEDIUM_ANSWER_THRESHOLD &&
            timeItTook <= SLOW_ANSWER_THRESHOLD
          ) {
            draft.score += SLOW_ANSWER_POINTS;
          }
        }
        break;

      case "NEXT_QUESTION":
        if (draft.currentQuestionIndex + 1 === draft.questions.length) {
          draft.scene = "GAME_OVER_SCREEN";
        }
        draft.currentQuestionIndex += 1;
        draft.selectedAnswer = null;
        break;

      case "TIME_UP":
        draft.scene = "QUESTION_TIME_UP";
        draft.selectedAnswer = null;
        break;

      case "RESTART_GAME":
        draft.scene = "PLAYING_SCREEN";
        draft.questions = action.payload.questions;

        // Reset game state
        draft.currentQuestionIndex = 0;
        draft.score = 0;
        draft.selectedAnswer = null;
        draft.totalCorrect = 0;
        break;

      case "GO_TO_MENU":
        draft.scene = "MENU_SCREEN";

        // Reset game state
        draft.questions = [];
        draft.currentQuestionIndex = 0;
        draft.score = 0;
        draft.selectedAnswer = null;
        draft.totalCorrect = 0;
        break;
    }
  });
}

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialGameState);
  const { beginTimer, stopTimer, reCount } = useTimer();

  function startGame() {
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selected = shuffled.slice(0, 20);

    dispatch({
      type: "START_GAME",
      payload: { questions: selected },
    });
    beginTimer();
  }

  function selectAnswer(answer: string, timeItTook: number) {
    dispatch({ type: "SELECT_ANSWER", payload: { answer, timeItTook } });
    stopTimer();
  }
  function nextQuestion() {
    dispatch({ type: "NEXT_QUESTION" });
    reCount();
  }
  function timeUp() {
    dispatch({ type: "TIME_UP" });
  }

  function restartGame() {
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selected = shuffled.slice(0, 20);

    dispatch({
      type: "START_GAME",
      payload: { questions: selected },
    });
    beginTimer();
  }

  function goToMenu() {
    dispatch({ type: "GO_TO_MENU" });
  }

  return (
    <GameStateContext.Provider
      value={{
        state,
        startGame,
        selectAnswer,
        nextQuestion,
        timeUp,
        restartGame,
        goToMenu,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
}
