import { useEffect, useRef, useState } from "react";

// Counts down once per second. Calls onExpire when it reaches 0.
export function useTimer(seconds, onExpire) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(true);
  const expire = useRef(onExpire);
  expire.current = onExpire;

  useEffect(() => {
    if (!running) return;
    if (left <= 0) {
      setRunning(false);
      expire.current();
      return;
    }
    const id = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(id);
  }, [left, running]);

  const stop = () => setRunning(false);
  return { left, stop };
}
