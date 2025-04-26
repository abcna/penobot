import React from "react";
import AIChat from "../components/AIChat";

const AIAssistant = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        AI Technical Assistant
      </h1>
      <AIChat />
    </div>
  );
};

export default AIAssistant;
