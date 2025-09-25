import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Question } from "../questions";
import { produce } from "immer";

export type Scene = "MENU_SCREEN" | "PLAYING_SCREEN" | "GAME_OVER_SCREEN";

interface GameState {
  scene: Scene;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isAnswerSelected: boolean;
  selectedAnswer: string | null;
  totalCorrect?: number;
}

const initialGameState: GameState = {
  scene: "MENU_SCREEN",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isAnswerSelected: false,
  selectedAnswer: null,
  totalCorrect: 0,
};

const GameStateContext = createContext<any>(null);

function reducer(state: GameState, action: any) {
  return produce(state, (draft) => {});
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
