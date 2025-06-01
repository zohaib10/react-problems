const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">
      🟣 Question 6: User Registration Form
    </h2>

    <div className="mb-4">
      <span className="font-semibold">Objective:</span> Create a{" "}
      <code className="bg-black px-1 rounded">&lt;SignupForm /&gt;</code>{" "}
      component that lets users register with name, email, and password.
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Use <code>useState</code> to manage form inputs.
        </li>
        <li>
          Validate fields in real-time:
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Name is required</li>
            <li>Email must be in valid format</li>
            <li>Password must be at least 6 characters</li>
          </ul>
        </li>
        <li>Show error messages under each field.</li>
        <li>Disable submit button until form is valid.</li>
        <li>Show a success message on submit.</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Use a single <code>useState</code> object for form values.
        </li>
        <li>
          Use a single <code>useState</code> object for error messages.
        </li>
        <li>Auto-focus the first invalid input on submit.</li>
        <li>
          Add a <strong>“Show Password”</strong> toggle checkbox.
        </li>
      </ul>
    </div>
  </div>
);

export default function Question6() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
    </div>
  );
}
