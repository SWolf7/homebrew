// src/pages/Login.js
import React, { useState } from "react";
import "../App.css"

export default function Login({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login/signup logic here
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input type="text" placeholder="Full Name" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isSignUp ? "Create Account" : "Log In"}</button>
        </form>
        <p onClick={toggleMode} className="toggle-text">
          {isSignUp ? "Already have an account? Log In" : "No account? Sign Up"}
        </p>
      </div>
    </div>
  );
}
