"use client";

import { fetchUsers } from "@/api/fetchUsers";
import { useEffect, useState } from "react";

const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">
      🔵 Question 5: Fetch and Display Data
    </h2>

    <div className="mb-4">
      <span className="font-semibold">Objective:</span> Build a{" "}
      <code className="bg-black px-1 rounded">&lt;UserList /&gt;</code>{" "}
      component that fetches and displays a list of users from a public API.
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Use <code>useEffect</code> to fetch data when the component mounts.
        </li>
        <li>
          Use <code>useState</code> to store the list of users.
        </li>
        <li>Show a loading message while fetching.</li>
        <li>Handle and display errors if the request fails.</li>
        <li>Display users in a styled list (e.g., name + email).</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Extract the API call to a separate <code>api.ts</code> utility file.
        </li>
        <li>
          Add a <strong>"Retry"</strong> button if there's an error.
        </li>
        <li>Add a search input to filter users by name.</li>
      </ul>
    </div>

    <div className="mt-4">
      <p className="font-semibold">Suggested API:</p>
      <code className="bg-black px-2 py-1 rounded block mt-1">
        https://jsonplaceholder.typicode.com/users
      </code>
    </div>
  </div>
);

type User = {
  name: string;
  email: string;
  id: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>();

  const getUsers = () => {
    setLoading(true);
    fetchUsers()
      .then((data: User[]) => {
        const newData = data.map(({ name, email, id }) => ({
          name,
          email,
          id,
        }));
        setUsers(newData);
        setAllUsers(newData);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <button onClick={getUsers}>Try again!</button>;
  }

  if (!allUsers || !users) {
    return <p>No users found!</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    const newUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(val)
    );
    setUsers(newUsers);
  };

  return (
    <div className="w-[80%]">
      <input
        className="w-[240px] p-2 border rounded-md border-gray-400"
        placeholder="Search User..."
        onChange={handleChange}
      />
      <table className="border rounded-md w-full my-4">
        <thead>
          <tr className="border">
            <th className="p-4 border">Name</th>
            <th className="border">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.email} className="text-center">
              <td className="p-2 border">{user.name}</td>
              <td className="border">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Question5() {
  return (
    <div className="w-full">
      <QuestionCard />
      <div className="my-4 w-full flex justify-center">
        <UserList />
      </div>
    </div>
  );
}
