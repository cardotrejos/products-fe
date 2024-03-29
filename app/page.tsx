"use client";
import { useState } from "react";
import useLogin from "./hooks/useLogin";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        {error && <p className="text-red-500">Login Failed: {error.message}</p>}
      </form>
    </div>
  );
}
