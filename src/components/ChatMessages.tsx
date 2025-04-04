
import React, { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-college-gray">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 bg-college-lightPurple rounded-full flex items-center justify-center mb-4">
            <span className="text-college-purple text-2xl">👋</span>
          </div>
          <h3 className="text-xl font-heading font-medium mb-2">Welcome to College Pal!</h3>
          <p className="text-gray-500 max-w-md">
            I'm here to help with events, schedules, and campus resources. How can I assist you today?
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble p-3 ${
                message.sender === 'user' ? 'user-message' : 'bot-message'
              }`}
            >
              {message.content}
            </div>
          ))}
          {isTyping && (
            <div className="message-bubble bot-message p-3">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
