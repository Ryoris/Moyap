import React from 'react';

const NoteList = ({ notes, handleDeleteNote }) => {
  return (
    <div>
      <h2>Liste des Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.subject} - Coefficient {note.coefficient} - Note {note.grade} - Date {note.date}
            <button onClick={() => handleDeleteNote(note.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
