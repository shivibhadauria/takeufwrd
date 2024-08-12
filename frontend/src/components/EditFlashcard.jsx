import React, { useState } from 'react';

const EditFlashcard = ({ refreshFlashcards }) => {
  const [id, setId] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleEdit = async () => {
    await fetch(`http://localhost:5000/api/flashcards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer }),
    });

    setId('');
    setQuestion('');
    setAnswer('');
    refreshFlashcards(); // Refresh flashcards
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Edit Flashcard</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Flashcard ID"
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="New Question"
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="New Answer"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Flashcard
      </button>
    </div>
  );
};

export default EditFlashcard;
