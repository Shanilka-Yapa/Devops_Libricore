//Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login clicked!\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "350px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#1d4ed8" }}>Library Login</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#2563eb", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
          Register Library
        </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
