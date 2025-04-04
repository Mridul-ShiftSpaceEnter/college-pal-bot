
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InfoPanelProps {
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-xl font-semibold">About College Pal</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X size={20} />
        </Button>
      </div>
      
      <div className="space-y-4">
        <p>
          College Pal is your AI assistant for navigating campus life. Get quick answers about:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>Campus events and activities</li>
          <li>Academic schedules and deadlines</li>
          <li>Campus resources and facilities</li>
          <li>Student services information</li>
          <li>General college life questions</li>
        </ul>
        
        <div className="bg-college-gray p-4 rounded-md mt-4">
          <h4 className="font-heading font-medium mb-2">How to use College Pal</h4>
          <p className="text-sm text-gray-600">
            Simply type your question in the chat box or select from the quick questions below. 
            College Pal is continuously learning to better assist students.
          </p>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Version 1.0 • Developed by Lovable
        </p>
      </div>
    </div>
  );
};

export default InfoPanel;
