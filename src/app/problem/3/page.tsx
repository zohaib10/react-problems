const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">
      🟡 Question 3: Todo List with Add & Remove
    </h2>

    <div className="mb-4">
      <span className="font-semibold">Objective:</span> Create a{" "}
      <code className="bg-black px-1 rounded">&lt;TodoList /&gt;</code>{" "}
      component where users can:
      <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
        <li>Add new tasks via an input</li>
        <li>See a list of tasks</li>
        <li>Remove tasks individually</li>
      </ul>
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Use <code>useState</code> to manage the list of todos.
        </li>
        <li>
          Each todo should have a unique <code>id</code> and <code>text</code>.
        </li>
        <li>Input field should clear after submission.</li>
        <li>Render the list below the input.</li>
        <li>
          Each task should have a <strong>Remove</strong> button.
        </li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Add keyboard support: hitting <code>Enter</code> adds the todo.
        </li>
        <li>Prevent empty tasks from being added.</li>
        <li>
          Use Tailwind to style the list with alternating background colors
          (e.g. <code>even:bg-gray-800</code>, <code>odd:bg-gray-700</code>).
        </li>
      </ul>
    </div>
  </div>
);

export default function TodoList() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
    </div>
  );
}
