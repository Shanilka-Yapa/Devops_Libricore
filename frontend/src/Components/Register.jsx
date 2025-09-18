// src/Components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [libraryName, setLibraryName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the values
    alert(`Library Registered!\nName: ${libraryName}\nEmail: ${email}\nAddress: ${address}\nPassword: ${password}`);
    // After registration, navigate to login page
    navigate("/login");
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
          maxWidth: "400px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#1d4ed8" }}>Library Registration</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Library Name"
            value={libraryName}
            onChange={(e) => setLibraryName(e.target.value)}
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Register Library
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
          Already registered?{" "}
          <span
            style={{ color: "#2563eb", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
