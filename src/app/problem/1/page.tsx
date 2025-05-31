const QuestionCard = () => (
  <div className=" p-6 text-white">
    <h2 className="text-xl font-bold mb-2 ">
      🟢 Question 1: Build a Simple Counter Component
    </h2>

    <p className="mb-4">
      <span className="font-semibold">Objective:</span> Create a React component
      called <code className="bg-black px-1 rounded">&lt;Counter /&gt;</code>{" "}
      that displays a number and has two buttons: <strong>Increment</strong> and{" "}
      <strong>Decrement</strong>.
    </p>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Use <code>useState</code> to manage the count.
        </li>
        <li>Initial count should be 0.</li>
        <li>Increment button adds 1.</li>
        <li>Decrement button subtracts 1.</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Disable the Decrement button when count is 0.</li>
        <li>Style it slightly with basic CSS (or Tailwind if you prefer).</li>
      </ul>
    </div>
  </div>
);

export default function Counter() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
    </div>
  );
}
