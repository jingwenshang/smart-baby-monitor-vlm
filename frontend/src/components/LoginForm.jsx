import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = ({ onClose, switchToRegister }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username] !== password) {
      setError("Invalid username or password.");
      return;
    }

    const token = `mock-token-${username}`;
    login(token, username);
    onClose();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded px-3 py-2"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Don’t have an account?{" "}
        <button
          onClick={switchToRegister}
          className="text-blue-500 hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
