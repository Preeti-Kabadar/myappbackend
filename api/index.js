// api/index.js

const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route (IMPORTANT)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully on Vercel 🚀"
  });
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API route" });
});

// ❌ DO NOT use app.listen()
// ✅ Export the app for Vercel
module.exports = app;