
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
        <div className="h-full flex flex-col items-center justify-center text-center p-6 relative">
          {/* Video background with higher opacity and dark overlay for better contrast */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#1A1F2C]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute w-full h-full object-cover opacity-90" // Increased opacity to 90%
            >
              <source src="https://cdn.gpteng.co/videos/particles-purple.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Keep the existing animated elements as fallback */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-college-purple/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-college-lightPurple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-college-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="w-16 h-16 bg-college-lightPurple rounded-full flex items-center justify-center mb-4 relative z-10 animate-bounce" style={{ animationDuration: '2s' }}>
            <span className="text-college-purple text-2xl">👋</span>
          </div>
          <h3 className="text-xl font-heading font-medium mb-2 relative z-10 animate-fade-in text-white">Welcome to College Pal!</h3>
          <p className="text-gray-300 max-w-md relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
