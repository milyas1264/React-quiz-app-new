import CategoryCard from "./CategoryCard";

export default function CategoryList({ categories, onSelect }) {
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold text-center text-blue-600 underline  decoration-purple-500 decoration-4 underline-offset-8">
        My React Quiz App
      </h1>
      <h2 className="text-3xl font-bold sm:text-4xl">Pick a category</h2>
      <p className="mt-2 mb-8 text-gray-400">
        10 questions per topic. Each question has a countdown timer.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            icon={c.icon}
            title={c.title}
            questions={c.questions.length}
            onClick={() => onSelect(c)}
          />
        ))}
      </div>
    </>
  );
}
