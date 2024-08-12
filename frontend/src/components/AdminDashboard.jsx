

// import React, { useState } from 'react';

// const AdminDashboard = ({ refreshFlashcards, handleMenuAction }) => {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleAddFlashcard = async () => {
//     await fetch('http://localhost:5000/api/flashcards', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question, answer }),
//     });

//     setQuestion('');
//     setAnswer('');
//     refreshFlashcards();
//   };

//   const handleMenuToggle = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <div className="relative p-4">
      

//       {/* Admin Menu Button */}
//       <button
//         onClick={handleMenuToggle}
//         className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Admin Menu
//       </button>

//       {/* Admin Menu Popup */}
//       {menuVisible && (
//         <div className="absolute top-14 right-4 bg-white border rounded shadow-lg p-4 z-10">
//           <h3 className="font-semibold mb-2">Admin Menu</h3>
//           <button
//             onClick={() => handleMenuAction('add')}
//             className="block w-full text-left px-2 py-1 hover:bg-gray-200"
//           >
//             Add Flashcard
//           </button>
//           <button
//             onClick={() => handleMenuAction('edit')}
//             className="block w-full text-left px-2 py-1 hover:bg-gray-200"
//           >
//             Edit Flashcard
//           </button>
//           <button
//             onClick={() => handleMenuAction('delete')}
//             className="block w-full text-left px-2 py-1 hover:bg-gray-200"
//           >
//             Delete Flashcard
//           </button>
//         </div>
//       )}

      
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import AddFlashcard from './AddFlashcard';
import EditFlashcard from './EditFlashcard';
import DeleteFlashcard from './DeleteFlashcard';

const AdminDashboard = ({ refreshFlashcards }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuAction = (action) => {
    setActiveComponent(action);
    setMenuVisible(false); // Hide menu after selection
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'add':
        return <AddFlashcard refreshFlashcards={refreshFlashcards} />;
      case 'edit':
        return <EditFlashcard refreshFlashcards={refreshFlashcards} />;
      case 'delete':
        return <DeleteFlashcard refreshFlashcards={refreshFlashcards} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative p-4">
      {/* Admin Menu Button */}
      <button
        onClick={handleMenuToggle}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Admin Menu
      </button>

      {/* Admin Menu Popup */}
      {menuVisible && (
        <div className="absolute top-14 right-4 bg-white border rounded shadow-lg p-4 z-10">
          <h3 className="font-semibold mb-2">Admin Menu</h3>
          <button
            onClick={() => handleMenuAction('add')}
            className="block w-full text-left px-2 py-1 hover:bg-gray-200"
          >
            Add Flashcard
          </button>
          <button
            onClick={() => handleMenuAction('edit')}
            className="block w-full text-left px-2 py-1 hover:bg-gray-200"
          >
            Edit Flashcard
          </button>
          <button
            onClick={() => handleMenuAction('delete')}
            className="block w-full text-left px-2 py-1 hover:bg-gray-200"
          >
            Delete Flashcard
          </button>
        </div>
      )}

      {/* Render Active Component */}
      {renderActiveComponent()}
    </div>
  );
};

export default AdminDashboard;
