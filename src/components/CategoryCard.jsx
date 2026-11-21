import { TIME_PER_QUESTION } from "../data/questions";

export default function CategoryCard(props) {
  return (
    <div
      onClick={props.onClick}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 hover:-translate-y-1 transition duration-300 cursor-pointer"
    >
      <div className="text-3xl mb-4">{props.icon}</div>

      <h2 className="text-xl font-bold text-white">{props.title}</h2>

      <p className="text-gray-400 mt-2">
        {props.questions} Questions · {TIME_PER_QUESTION}s each
      </p>

      <button className="mt-5 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">
        Start Quiz
      </button>
    </div>
  );
}
