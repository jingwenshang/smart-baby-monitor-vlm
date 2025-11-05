import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RegisterForm = ({ onClose, switchToLogin }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      setError("Username already exists.");
      return;
    }

    // Save new user
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    // Auto login
    const token = `mock-token-${username}`;
    login(token, username);
    onClose();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Create Account
      </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
          Register
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-blue-500 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
