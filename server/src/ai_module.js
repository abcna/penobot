// Knowledge base for pneumatic systems
const knowledgeBase = [
  {
    keywords: ["pneumatic", "system", "basics", "introduction"],
    answer:
      "A pneumatic system is a system that uses compressed air to transmit and control energy. It typically consists of an air compressor, air treatment components, control valves, and actuators.",
  },
  {
    keywords: ["compressor", "types", "selection"],
    answer:
      "Common types of compressors include reciprocating, rotary screw, and centrifugal compressors. Selection depends on factors like required pressure, flow rate, and duty cycle.",
  },
  {
    keywords: ["valve", "types", "function"],
    answer:
      "Pneumatic valves control the flow of compressed air. Common types include directional control valves, flow control valves, and pressure control valves.",
  },
  {
    keywords: ["cylinder", "selection", "sizing"],
    answer:
      "Cylinder selection depends on force requirements, stroke length, and mounting style. Common types include single-acting and double-acting cylinders.",
  },
  {
    keywords: ["maintenance", "troubleshooting", "common issues"],
    answer:
      "Common pneumatic system issues include air leaks, pressure drops, and contamination. Regular maintenance includes checking for leaks, replacing filters, and monitoring pressure levels.",
  },
];

/**
 * Function to answer technical questions about pneumatic systems
 * @param {string} question - The user's question
 * @returns {string} - The answer to the question
 */
function answerTechnicalQuestion(question) {
  // Convert question to lowercase for case-insensitive matching
  const lowerQuestion = question.toLowerCase();

  // Find the best matching answer based on keyword matches
  let bestMatch = {
    score: 0,
    answer:
      "I'm sorry, I don't have enough information to answer that question. Please try rephrasing or ask about a different aspect of pneumatic systems.",
  };

  knowledgeBase.forEach((item) => {
    let score = 0;
    item.keywords.forEach((keyword) => {
      if (lowerQuestion.includes(keyword)) {
        score++;
      }
    });

    if (score > bestMatch.score) {
      bestMatch = {
        score,
        answer: item.answer,
      };
    }
  });

  return bestMatch.answer;
}

module.exports = {
  answerTechnicalQuestion,
};
