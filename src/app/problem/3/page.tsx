"use client";

import { useRef, useState } from "react";

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

type Todo = {
  id: string;
  text: string;
};

type TodoFormProps = {
  onSubmit: (val: string) => void;
};

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [todo, setTodo] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (todo) {
      onSubmit(todo);
      setTodo("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todo) {
      onSubmit(todo);
      setTodo("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className=" flex justify-center w-[400px]">
      <input
        type="text"
        ref={inputRef}
        className="p-2 mx-3 border rounded-md w-[320px]"
        placeholder="add todo"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        disabled={!todo}
        onClick={handleClick}
        className="w-[80px] py-2 text-lg rounded-md bg-purple-600 text-white disabled:bg-gray-500"
      >
        Add
      </button>
    </div>
  );
};

type DisplayListProps = {
  todos: Todo[];
  removeTodo: (id: string) => void;
};
const DisplayList = ({ todos, removeTodo }: DisplayListProps) => {
  if (!todos.length) {
    return <p className="m-8">No todos have been added yet</p>;
  }

  return (
    <table className="w-[400px] my-6 border text-center">
      <thead>
        <tr>
          <th className="p-2 border">Task</th>
          <th className="w-[82px]">Remove</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id} className="border even:bg-gray-900 odd:bg-gray-700">
            <td className="border">{todo.text}</td>
            <td className="w-[82px] h-[40px]">
              <button
                className="w-full h-full bg-red-500 border-red-500 text-center"
                onClick={() => removeTodo(todo.id)}
              >
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (text: string) =>
    setTodos([...todos, { id: crypto.randomUUID(), text }]);

  const handleRemoveTodo = (id: string) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col">
      <TodoForm onSubmit={handleSubmit} />
      <DisplayList todos={todos} removeTodo={handleRemoveTodo} />
    </div>
  );
};

export default function TodoList() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
      <div className="w-full flex justify-center mt-10 ">
        <List />
      </div>
    </div>
  );
}
