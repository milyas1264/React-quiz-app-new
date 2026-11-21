export default function ResultScreen({ category, score, onRetry, onHome }) {
  const total = category.questions.length;
  const msg = score === total ? "Perfect score!" : score >= total / 2 ? "Nice work." : "Keep practising.";

  return (
    <div className="max-w-md mx-auto text-center bg-slate-800 border border-slate-700 rounded-xl p-8">
      <div className="text-5xl mb-4">{category.icon}</div>
      <h2 className="text-2xl font-bold">{msg}</h2>
      <p className="text-gray-400 mt-2">
        You scored {score} out of {total} in {category.title}.
      </p>
      <div className="flex gap-3 justify-center mt-8">
        <button onClick={onRetry} className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">
          Retry quiz
        </button>
        <button onClick={onHome} className="border border-slate-600 hover:border-purple-500 text-white px-5 py-2 rounded-lg">
          All categories
        </button>
      </div>
    </div>
  );
}
