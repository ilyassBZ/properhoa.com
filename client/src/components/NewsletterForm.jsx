import { useState } from "react";
import axios from "axios";
import "./NewsletterForm.css";

export default function NewsletterForm({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://135.125.191.63:3001";
      await axios.post(`${apiUrl}/subscribe`, { email });
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(""), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`newsletter-form-container ${variant}`}>
      <form onSubmit={subscribe} className="newsletter-form">
        <div className="input-group">
          <input
            className="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Join the Waitlist"}
          </button>
        </div>
        {status === "success" && (
          <p className="status-message success">
            🎉 Perfect! You're on the waitlist!
          </p>
        )}
        {status === "error" && (
          <p className="status-message error">
            ❌ Something went wrong, please try again
          </p>
        )}
      </form>
    </div>
  );
}

