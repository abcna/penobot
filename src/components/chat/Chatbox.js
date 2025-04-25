import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState("basic"); // Default model
  const messagesEndRef = useRef(null);

  // Models configuration
  const models = [
    {
      id: "basic",
      name: "Basic Model",
      description: "Simple keyword matching for general questions",
    },
    {
      id: "technical",
      name: "Technical Model",
      description: "Advanced technical knowledge base",
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting Model",
      description: "Specialized in system issues and maintenance",
    },
  ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user", model: selectedModel };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Call the backend API with selected model
      const response = await axios.post(
        "http://localhost:5000/api/ai/question",
        {
          question: input,
          model: selectedModel,
        }
      );

      // Add AI response to chat
      const aiMessage = {
        text: response.data.answer,
        sender: "ai",
        model: selectedModel,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(
        "Sorry, there was an error processing your question. Please try again."
      );
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Model Selection */}
      <div className="bg-gray-100 p-4 rounded-t-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select AI Model
        </label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
        >
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <p className="mt-1 text-sm text-gray-500">
          {models.find((m) => m.id === selectedModel)?.description}
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 bg-white p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user" ? "ml-auto" : "mr-auto"
            } max-w-[80%]`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-primary-100 text-primary-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div className="mt-1 text-xs text-gray-500">
                {message.sender === "ai" && (
                  <>
                    <span className="font-medium">
                      {models.find((m) => m.id === message.model)?.name}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{message.timestamp}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-500">AI is thinking...</div>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about pneumatic systems..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;
