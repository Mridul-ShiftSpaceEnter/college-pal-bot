
import React, { useState, useEffect } from 'react';
import ChatHeader from '@/components/ChatHeader';
import ChatMessages from '@/components/ChatMessages';
import ChatInput from '@/components/ChatInput';
import QuickQuestions from '@/components/QuickQuestions';
import InfoPanel from '@/components/InfoPanel';
import { Message } from '@/types/chat';
import { getBotResponse } from '@/services/chatService';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const addMessage = (content: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, { content, sender }]);
  };

  const handleSendMessage = async (message: string) => {
    // Add user message
    addMessage(message, 'user');
    
    // Show bot typing indicator
    setIsTyping(true);
    
    try {
      // Get bot response
      const response = await getBotResponse(message);
      
      // Add bot response after typing delay
      addMessage(response, 'bot');
    } catch (error) {
      console.error('Error getting bot response:', error);
      addMessage("I'm having trouble processing your request right now. Please try again later.", 'bot');
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const toggleInfo = () => {
    setInfoOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <ChatHeader toggleInfo={toggleInfo} />
      
      <ChatMessages messages={messages} isTyping={isTyping} />
      
      <QuickQuestions 
        onSelectQuestion={handleQuickQuestion} 
        isDisabled={isTyping} 
      />
      
      <ChatInput 
        onSendMessage={handleSendMessage} 
        isDisabled={isTyping} 
      />

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-md">
          <InfoPanel onClose={() => setInfoOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
