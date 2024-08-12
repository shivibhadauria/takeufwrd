import React, { useState } from 'react';

const DeleteFlashcard = ({ refreshFlashcards }) => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/api/flashcards/${id}`, {
      method: 'DELETE',
    });

    setId('');
    refreshFlashcards(); // Refresh flashcards
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Delete Flashcard</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Flashcard ID"
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Flashcard
      </button>
    </div>
  );
};

export default DeleteFlashcard;
