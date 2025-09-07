"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIReceptionistChat: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Initialize with the first AI message
    const initialMessage: Message = {
      id: "1",
      text: t("chat.messages.ai.availability"),
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, [t]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response based on conversation flow
    setTimeout(() => {
      if (currentStep === 0) {
        // User wants to book appointment
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: t("chat.messages.ai.availability"),
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setCurrentStep(1);
      } else if (currentStep === 1) {
        // User confirms time
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: t("chat.confirmation"),
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setShowConfirmation(true);
        setCurrentStep(2);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 p-4 border-b border-blue-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{t("chat.title")}</h3>
            <p className="text-tertiary text-sm">{t("chat.status")}</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-blue-900">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-gray-600 text-white"
                  : "bg-blue-700 text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Bar */}
      {showConfirmation && (
        <div className="bg-blue-800 p-3 border-t border-blue-700">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-tertiary rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-tertiary text-sm font-medium">
              {t("chat.confirmation")}
            </span>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-blue-800 border-t border-blue-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t("chat.inputPlaceholder")}
            className="flex-1 px-4 py-2 bg-blue-700 text-white placeholder-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-tertiary"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-tertiary text-primary font-semibold rounded-full hover:bg-tertiary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary/50"
          >
            {t("chat.sendButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIReceptionistChat;
