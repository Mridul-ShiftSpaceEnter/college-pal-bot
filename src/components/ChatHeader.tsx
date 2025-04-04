
import React from 'react';
import { Settings, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  toggleInfo: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleInfo }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-college-purple flex items-center justify-center">
          <span className="text-white font-bold text-lg">CP</span>
        </div>
        <div>
          <h2 className="font-heading font-medium text-lg">College Pal</h2>
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:text-college-blue"
          onClick={toggleInfo}
        >
          <Info size={20} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:text-college-blue"
        >
          <Settings size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
