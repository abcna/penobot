import React, { useState, useEffect, useRef } from "react";
import { Groq } from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

// Available Groq models
const GROQ_MODELS = {
  "Llama 3.3 70B": "llama-3.3-70b-versatile",
  "Llama 3.3 8B": "llama-3.3-8b-versatile",
  "Mixtral 8x7B": "mixtral-8x7b-32768",
  "Gemma 7B": "gemma-7b-it",
};

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(
    GROQ_MODELS["Llama 3.3 70B"]
  );
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    console.log("[Chat] Submitting new message:", input);
    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const chatMessages = [
        {
          role: "system",
          content: `You are an expert in pneumatic systems and industrial automation. You have deep knowledge of:
- Pneumatic components (valves, cylinders, actuators, fittings)
- Industrial automation systems
- System design and integration
- Technical specifications and standards
- Safety protocols and best practices

Your task is to provide detailed, accurate, and practical information about pneumatic systems. Always:
1. Provide specific, technical information
2. Include relevant specifications and standards
3. Address safety considerations
4. Suggest practical solutions
5. Reference industry best practices

If you need clarification, ask specific follow-up questions about:
- System requirements
- Environmental conditions
- Performance expectations
- Safety requirements
- Industry standards

You should:
- Answer all questions to the best of your ability
- Provide detailed explanations
- Use technical terminology correctly
- Give practical examples when relevant
- Reference industry standards and best practices
- Consider safety implications
- Suggest specific components or solutions when appropriate`,
        },
        ...messages,
        userMessage,
      ];

      console.log("[Groq] Sending request to model:", selectedModel);
      const completion = await groq.chat.completions.create({
        messages: chatMessages,
        model: selectedModel,
        temperature: 0.5,
        max_completion_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false,
      });

      console.log("[Groq] Received response:", completion);
      const aiMessage = {
        role: "assistant",
        content:
          completion.choices[0]?.message?.content || "No response generated",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("[Groq] Error:", error);
      setError(
        "Failed to get AI response. Please check the console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <div className="border-t p-4 bg-white">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="border rounded px-2 py-1"
            >
              {Object.entries(GROQ_MODELS).map(([name, value]) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded px-4 py-2"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
