import { useState } from "react";
import { categories } from "./data/questions";
import CategoryList from "./components/CategoryList";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [category, setCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const start = (c) => {
    setCategory(c);
    setIndex(0);
    setScore(0);
    setDone(false);
  };
  const home = () => setCategory(null);
  const addAnswer = (correct) => correct && setScore((s) => s + 1);
  const next = () =>
    index + 1 < category.questions.length ? setIndex(index + 1) : setDone(true);

  return (
    <main className="max-w-5xl px-5 py-10 mx-auto">
      {!category && <CategoryList categories={categories} onSelect={start} />}
      {category && !done && (
        <QuizScreen
          key={`${category.id}-${index}`}
          category={category}
          index={index}
          score={score}
          onAnswer={addAnswer}
          onNext={next}
          onExit={home}
        />
      )}
      {category && done && (
        <ResultScreen
          category={category}
          score={score}
          onRetry={() => start(category)}
          onHome={home}
        />
      )}
    </main>
  );
}
