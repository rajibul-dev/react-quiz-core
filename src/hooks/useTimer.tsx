import { produce } from "immer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

const TIMER_DURATION = 15; // seconds

interface TimerState {
  time: number;
  isActive: boolean;
}

const initialTimerValue = { time: TIMER_DURATION, isActive: false };
const TimerContext = createContext<any>(null);

function reducer(state: TimerState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "START":
        draft.isActive = true;
        draft.time = TIMER_DURATION;
        break;

      case "STOP":
        draft.isActive = false;
        break;

      case "TICK":
        if (draft.time > 0 && draft.isActive) {
          draft.time -= 1;
        }
        break;

      case "RE-COUNT":
        draft.time = TIMER_DURATION;
        draft.isActive = true;
        break;

      default:
        break;
    }
  });
}

export function TimerProvider({ children }: { children: ReactNode }) {
  const [{ isActive, time }, dispatch] = useReducer(reducer, initialTimerValue);

  useEffect(() => {
    if (time <= 0 && isActive) {
      dispatch({ type: "STOP" });
    }
  }, [time, isActive]);

  useEffect(() => {
    let intervalFunction: ReturnType<typeof setInterval> | null = null;

    if (isActive) {
      intervalFunction = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    return () => {
      if (intervalFunction) clearInterval(intervalFunction);
    };
  }, [isActive]);

  function beginTimer() {
    dispatch({ type: "START" });
  }

  function stopTimer() {
    dispatch({ type: "STOP" });
  }

  function reCount() {
    dispatch({ type: "RE-COUNT" });
  }

  return (
    <TimerContext.Provider
      value={{ isActive, time, beginTimer, stopTimer, reCount }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
