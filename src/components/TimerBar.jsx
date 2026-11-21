export default function TimerBar({ left = 30, total = 30 }) {
  const low = left <= 5;
  return (
    <>
      <span
        className={`font-bold text-base ${low ? "text-rose-400" : "text-white"}`}
      >
        ⏱ {left}s
      </span>
      <div className="order-last w-full h-2 mt-2 mb-8 overflow-hidden rounded-full bg-slate-800 basis-full">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${low ? "bg-rose-500" : "bg-purple-600"}`}
          style={{ width: `${(left / total) * 100}%` }}
        />
      </div>
    </>
  );
}
