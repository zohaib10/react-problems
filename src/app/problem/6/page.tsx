"use client";

import { useRef, useState } from "react";

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

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (password: string) => password.length >= 6;

type InputValidation = {
  error?: boolean;
  errorMessage?: string;
  validate?: (p: string) => void;
  ref: React.Ref<HTMLInputElement>;
};

type FieldNames = "name" | "email" | "password";
type SignupFormValidations = Record<FieldNames, InputValidation>;
type SignupFormValues = Record<FieldNames, string>;

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState<SignupFormValues>({
    email: "",
    name: "",
    password: "",
  });

  const [validations, setvalidations] = useState<SignupFormValidations>({
    name: {
      ref: useRef<HTMLInputElement>(null),
    },
    email: {
      ref: useRef<HTMLInputElement>(null),
    },
    password: {
      ref: useRef<HTMLInputElement>(null),
    },
  });

  const validValues = () => Object.values(values).every((v) => !!v.length);
  const errorsValid = () => Object.values(validations).every((v) => !v.error);

  const isValid = () => validValues() && errorsValid();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: FieldNames
  ) => {
    const value = e.target.value;
    setValues((c) => ({ ...c, [type]: value }));

    switch (type) {
      case "name":
        if (value.length) {
          setvalidations((c) => ({
            ...c,
            name: {
              ...c["name"],
              error: false,
            },
          }));
        }
        break;
      case "email":
        if (validateEmail(value)) {
          setvalidations((c) => ({
            ...c,
            email: {
              ...c["email"],
              error: false,
            },
          }));
        }
        break;

      case "password":
        if (validatePassword(value)) {
          setvalidations((c) => ({
            ...c,
            password: {
              ...c["password"],
              error: false,
            },
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleValidations = (type: FieldNames) => {
    switch (type) {
      case "name":
        const name = values["name"];
        if (!name.length) {
          setvalidations((c) => ({
            ...c,
            name: {
              ...c["name"],
              error: true,
            },
          }));
        } else {
          setvalidations((c) => ({
            ...c,
            name: {
              ...c["name"],
              error: false,
            },
          }));
        }
        break;

      case "email":
        const email = values["email"];
        if (!email) {
          setvalidations((c) => ({
            ...c,
            email: {
              ...c["email"],
              error: true,
            },
          }));
        } else {
          if (validateEmail(email)) {
            setvalidations((c) => ({
              ...c,
              email: {
                ...c["email"],
                error: false,
              },
            }));
          } else {
            setvalidations((c) => ({
              ...c,
              email: {
                ...c["email"],
                error: true,
                errorMessage: "Email must be in valid format",
              },
            }));
          }
        }
        break;
      case "password":
        const password = values["password"];
        if (!password) {
          setvalidations((c) => ({
            ...c,
            password: {
              ...c["password"],
              error: true,
            },
          }));
        } else {
          if (validatePassword(password)) {
            setvalidations((c) => ({
              ...c,
              password: {
                ...c["password"],
                error: false,
              },
            }));
          } else {
            setvalidations((c) => ({
              ...c,
              password: {
                ...c["password"],
                error: true,
                errorMessage: "Password must be at least 6 characters",
              },
            }));
          }
        }

      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (!values["name"]) {
      handleValidations("name");
      const nameRef = validations["name"].ref;
      nameRef?.current?.focus();
    } else if (!values["email"] || !validateEmail(values["email"])) {
      handleValidations("email");
      const nameRef = validations["email"].ref;
      nameRef?.current?.focus();
    } else if (!values["password"] || !validatePassword(values["password"])) {
      handleValidations("password");
      const nameRef = validations["password"].ref;
      nameRef?.current?.focus();
    } else {
      console.log("Submission is valid");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="border rounded-md p-2 w-[400px] mt-8"
        placeholder="Name"
        value={values["name"]}
        ref={validations["name"].ref}
        onChange={(e) => handleChange(e, "name")}
        onBlur={() => handleValidations("name")}
      />
      <p
        className={`text-sm p-0 text-red-500 w-full ${
          !!validations["name"].error ? "block" : "hidden"
        }`}
      >
        {validations["name"].errorMessage || "Name is required."}
      </p>
      <input
        className="border rounded-md p-2 w-[400px] mt-8"
        placeholder="Email"
        ref={validations["email"].ref}
        value={values["email"]}
        onChange={(e) => handleChange(e, "email")}
        onBlur={() => handleValidations("email")}
      />
      <p
        className={`text-sm p-0 text-red-500 w-full ${
          !!validations["email"].error ? "block" : "hidden"
        }`}
      >
        {validations["email"].errorMessage || "Email is required."}
      </p>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          ref={validations["password"].ref}
          className="border rounded-md p-2 w-[400px] mt-8"
          placeholder="Password"
          value={values["password"]}
          onChange={(e) => handleChange(e, "password")}
          onBlur={() => handleValidations("password")}
        />
        <p
          className={`text-sm p-0 text-red-500 w-full ${
            !!validations["password"].error ? "block" : "hidden"
          }`}
        >
          {validations["password"].errorMessage || "Password is required."}
        </p>
        <button
          className="absolute top-10 right-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      </div>

      <button
        disabled={!isValid()}
        onClick={handleSubmit}
        className="mt-4 border rounded-md w-[120px] p-2 bg-indigo-600 border-indigo-600 disabled:bg-gray-500 disabled:border-gray-500 disabled:text-black"
      >
        Submit
      </button>
    </div>
  );
};

export default function Question6() {
  return (
    <div className="w-full h-dvh">
      <QuestionCard />
      <div className="my-4 w-full flex justify-center">
        <SignupForm />
      </div>
    </div>
  );
}
