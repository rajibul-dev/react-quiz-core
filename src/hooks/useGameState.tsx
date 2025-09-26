import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Question } from "../questions";
import { produce } from "immer";
import {
  FAST_ANSWER_THRESHOLD,
  MEDIUM_ANSWER_THRESHOLD,
  SLOW_ANSWER_THRESHOLD,
} from "./useTimer";

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
  totalCorrect?: number;
}

const initialGameState: GameState = {
  scene: "MENU_SCREEN",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  totalCorrect: 0,
};

const GameStateContext = createContext<any>(null);

function reducer(state: GameState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "START_GAME":
        draft = initialGameState;
        draft.scene = "PLAYING_SCREEN";
        draft.questions = action.payload.questions;
        draft.currentQuestionIndex = 0;
        break;

      case "SELECT_ANSWER":
        draft.selectedAnswer = action.payload.answer;
        const isCorrect =
          draft.selectedAnswer ===
          draft.questions[draft.currentQuestionIndex].answer;

        if (isCorrect) {
          const timeItTook = action.payload.timeItTook;
          if (timeItTook <= FAST_ANSWER_THRESHOLD) {
            draft.score += FAST_ANSWER_POINTS;
          } else if (
            timeItTook >= FAST_ANSWER_THRESHOLD &&
            timeItTook <= MEDIUM_ANSWER_THRESHOLD
          ) {
            draft.scene += MEDIUM_ANSWER_POINTS;
          } else if (
            timeItTook >= MEDIUM_ANSWER_THRESHOLD &&
            timeItTook <= SLOW_ANSWER_THRESHOLD
          ) {
            draft.scene += SLOW_ANSWER_POINTS;
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
    }
  });
}

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialGameState);

  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
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
