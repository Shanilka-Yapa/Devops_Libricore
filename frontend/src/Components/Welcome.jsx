import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#1d4ed8",
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        Welcome to Libricore
      </h1>

      {/* Description */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "1.2rem",
          textAlign: "center",
          maxWidth: "600px",
          marginBottom: "40px"
        }}
      >
        A smart library management hub to track books, monitor users, and manage fines effortlessly. 
        Simplify borrowing, returning, and record-keeping all in one place.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px" }}>

        {/* ✅ Login button now linked */}
        <Link to="/login">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          color: "#6b7280",
          fontSize: "0.9rem",
          textAlign: "center"
        }}
      >
        &copy; 2025 LibraryCore. All rights reserved.
      </footer>
    </div>
  );
}

export default Welcome;