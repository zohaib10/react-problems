"use client";

import { useState } from "react";

const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">
      🟢 Question 2: Toggle Visibility Component
    </h2>

    <p className="mb-4">
      <span className="font-semibold">Objective:</span> Create a{" "}
      <code className="bg-black px-1 rounded">&lt;ToggleText /&gt;</code>{" "}
      component that shows or hides a block of text when a button is clicked.
    </p>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Show a button labeled <code>"Show"</code> when the text is hidden, and{" "}
          <code>"Hide"</code> when the text is visible.
        </li>
        <li>
          Use <code>useState</code> to manage visibility.
        </li>
        <li>
          The text to show/hide can be:{" "}
          <code>"This is some secret content you can toggle!"</code>
        </li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Add a prop called <code>initiallyVisible</code> (default: false).
        </li>
        <li>
          Allow users to pass in custom text via a prop like{" "}
          <code>children</code>.
        </li>
      </ul>
    </div>
  </div>
);

type VisibilityToggleProps = {
  initiallyVisible?: boolean;
  children: React.ReactNode;
};

const VisibilityToggle = ({
  initiallyVisible = false,
  children,
}: VisibilityToggleProps) => {
  const [show, setShow] = useState(initiallyVisible);

  const handleButtonClick = () => setShow(!show);

  return (
    <div className="flex flex-col w-full items-center">
      <button
        onClick={handleButtonClick}
        aria-expanded={show}
        className="border px-4 py-2 rounded-sm bg-purple-800 border-purple-800 w-[80px] text-center m-2"
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && <div>{children}</div>}
    </div>
  );
};

export default function Visibility() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
      <div className="w-full flex justify-center mt-10">
        <VisibilityToggle>
          <p>This is some secret content you can toggle!</p>
        </VisibilityToggle>
      </div>
    </div>
  );
}
