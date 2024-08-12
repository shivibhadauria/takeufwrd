import React, { useState } from 'react';

const AddFlashcard = ({ refreshFlashcards }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAdd = async () => {
    await fetch('http://localhost:5000/api/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer }),
    });

    setQuestion('');
    setAnswer('');
    refreshFlashcards(); // Refresh flashcards
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Add Flashcard</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Flashcard
      </button>
    </div>
  );
};

export default AddFlashcard;
