import React from "react";
import Chatbox from "../components/chat/Chatbox";

const AIAssistant = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        AI Technical Assistant
      </h1>
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <Chatbox />
      </div>
    </div>
  );
};

export default AIAssistant;
