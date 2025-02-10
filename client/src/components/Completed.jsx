import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Completed = (code) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg max-w-3xl mx-auto shadow-md">
      {/* Icon */}
      <CheckCircleIcon className="w-6 h-6 text-green-500 mr-4" />

      {/* Text Content */}
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-green-700">Thank you !</h2>
        <p className="text-lg text-green-600">
        You've completed the survey. Your completion code to copy in Prolific is <strong>{code.code}</strong>
        </p>
      </div>

    </div>
  );
};

export default Completed;
