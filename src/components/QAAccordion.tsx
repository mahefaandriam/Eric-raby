import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type QAAccordionProps = {
  question: string;
  answer: string | JSX.Element;
};

export default function QAAccordion({ question, answer }: QAAccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border border-gray-300  overflow-hidden bg-white shadow mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-800 text-xs font-thin"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`px-4 pb-4 text-gray-600 text-xs font-thin transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
