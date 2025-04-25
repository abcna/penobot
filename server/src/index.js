const express = require("express");
const cors = require("cors");
const { answerTechnicalQuestion } = require("./ai_module");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// AI Question Endpoint
app.post("/api/ai/question", (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const answer = answerTechnicalQuestion(question);
    res.json({ answer });
  } catch (error) {
    console.error("Error processing question:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
