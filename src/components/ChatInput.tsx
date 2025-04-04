
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isDisabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isDisabled }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !isDisabled) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 border-t border-gray-200 bg-white"
    >
      <div className="flex items-center">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 focus-visible:ring-college-blue"
          disabled={isDisabled}
        />
        <Button 
          type="submit"
          variant="ghost"
          size="icon"
          className="ml-2 text-college-blue hover:bg-college-gray hover:text-college-blue"
          disabled={!inputMessage.trim() || isDisabled}
        >
          <Send size={20} />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
