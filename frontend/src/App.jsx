// src/App.jsx
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f3f4f6", // light gray
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#1d4ed8", // blue
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        Welcome to LibraryX
      </h1>

      {/* Description */}
      <p
        style={{
          color: "#4b5563", // gray
          fontSize: "1.2rem",
          textAlign: "center",
          maxWidth: "600px",
          marginBottom: "40px"
        }}
      >
        Your one-stop solution to manage books, track loans, and explore new collections. 
        Easily browse, borrow, and return books from anywhere.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb", // blue
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          View Books
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#16a34a", // green
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          color: "#6b7280", // gray
          fontSize: "0.9rem",
          textAlign: "center"
        }}
      >
        &copy; 2025 LibraryX. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
