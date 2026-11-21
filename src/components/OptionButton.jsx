const styles = {
  idle: "border-slate-700 hover:border-purple-500",
  correct: "border-emerald-500 bg-emerald-500/10",
  wrong: "border-rose-500 bg-rose-500/10",
  dim: "border-slate-700 opacity-60",
};

export default function OptionButton({ label, state, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`text-left bg-slate-800 p-4 rounded-xl border transition ${styles[state]}`}
    >
      <code className="font-mono">{label}</code>
    </button>
  );
}
