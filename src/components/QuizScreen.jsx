import { useState } from "react";
import { TIME_PER_QUESTION } from "../data/questions";
import { useTimer } from "../hooks/useTimer";
import TimerBar from "./TimerBar";
import OptionButton from "./OptionButton";

export default function QuizScreen({ category, index, score, onAnswer, onNext, onExit }) {
  const q = category.questions[index];
  const [picked, setPicked] = useState(null);
  const [timedOut, setTimedOut] = useState(false);
  const answered = picked !== null || timedOut;

  const { left, stop } = useTimer(TIME_PER_QUESTION, () => {
    setTimedOut(true);
    onAnswer(false);
  });

  const choose = (i) => {
    if (answered) return;
    stop();
    setPicked(i);
    onAnswer(i === q.answer);
  };

  const stateOf = (i) => {
    if (!answered) return "idle";
    if (i === q.answer) return "correct";
    if (i === picked) return "wrong";
    return "dim";
  };

  const isLast = index + 1 === category.questions.length;

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onExit} className="text-gray-400 hover:text-white mb-6">
        ← All categories
      </button>

      <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
        <span>
          {category.icon} {category.title} · Question {index + 1} of {category.questions.length} · Score {score}
        </span>
        <TimerBar left={left} total={TIME_PER_QUESTION} />
      </div>

      <h2 className="text-2xl font-bold mb-6">{q.question}</h2>

      <div className="grid gap-3">
        {q.options.map((o, i) => (
          <OptionButton
            key={i}
            label={o}
            state={stateOf(i)}
            disabled={answered}
            onClick={() => choose(i)}
          />
        ))}
      </div>

      {timedOut && (
        <p className="mt-5 text-rose-400">Time's up! The correct answer is highlighted.</p>
      )}

      {answered && (
        <button
          onClick={onNext}
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
        >
          {isLast ? "See results" : "Next question"}
        </button>
      )}
    </div>
  );
}
