
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickQuestionsProps {
  onSelectQuestion: (question: string) => void;
  isDisabled: boolean;
}

const questions = [
  "When's the next campus event?",
  "How do I access the library resources?",
  "What are the dining hall hours?",
  "Where can I find my class schedule?",
  "Tell me about campus clubs",
];

const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onSelectQuestion, isDisabled }) => {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <p className="text-sm text-gray-500 mb-2">Quick questions:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs bg-white hover:bg-college-gray hover:text-college-blue hover:border-college-blue"
            onClick={() => onSelectQuestion(question)}
            disabled={isDisabled}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuestions;
