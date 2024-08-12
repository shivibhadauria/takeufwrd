// src/App.jsx
import React, { useEffect, useState } from 'react';
import FlashcardContainer from './components/FlashcardContainer';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    const response = await fetch('http://localhost:5000/api/flashcards');
    const data = await response.json();
    setFlashcards(data);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {flashcards.length > 0 ? (
        <FlashcardContainer flashcards={flashcards} />
      ) : (
        <p>Loading flashcards...</p>
      )}
      <AdminDashboard refreshFlashcards={fetchFlashcards} />
    </div>
  );
};

export default App;
