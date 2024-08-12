// src/components/Flashcard.jsx
import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`bg-white border shadow-lg p-8 rounded-lg cursor-pointer text-center w-96 h-60 transform transition-transform ${
        flipped ? 'rotate-y-180' : ''
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flex items-center justify-center h-full">
        {flipped ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default Flashcard;
