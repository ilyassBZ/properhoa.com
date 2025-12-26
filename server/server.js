import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const EMAIL_FILE = process.env.EMAIL_FILE || path.join(__dirname, "emails.csv");

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Ensure file exists
  if (!fs.existsSync(EMAIL_FILE)) {
    fs.writeFileSync(EMAIL_FILE, "", "utf8");
  }

  fs.appendFile(EMAIL_FILE, email + "\n", (err) => {
    if (err) {
      console.error("Failed to save email:", err);
      return res.status(500).json({ error: "Failed to save email" });
    }
    console.log(`📧 New subscription: ${email}`);
    res.json({ message: "Saved successfully" });
  });
});

app.get("/emails", (req, res) => {
  if (!fs.existsSync(EMAIL_FILE)) {
    return res.status(404).json({ error: "No emails found" });
  }
  res.download(EMAIL_FILE);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Email file: ${EMAIL_FILE}`);
});

