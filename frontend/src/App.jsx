import React, { useState, useContext } from "react";
import UploadForm from "./components/UploadForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { username, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 relative">
      {/* Login / Logout */}
      <div className="absolute top-6 right-6">
        {username ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-800 text-sm">👤 {username}</span>
            <button
              onClick={logout}
              className="text-sm border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-100 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="text-sm border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition"
          >
            Login
          </button>
        )}
      </div>

      {/* Centered Title */}
      <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
        🍼 Smart Baby Monitor
      </h1>

      {/* Modals */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <LoginForm
            onClose={() => setShowLogin(false)}
            switchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <RegisterForm
            onClose={() => setShowRegister(false)}
            switchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          />
        </div>
      )}

      {/* Upload Section */}
      <UploadForm triggerLogin={() => setShowLogin(true)} />
    </div>
  );
}

export default App;
