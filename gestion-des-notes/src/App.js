import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteService from './components/NoteService';
import Average from './components/Average';
import NotesChart from './components/NotesChart';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await NoteService.getAllNotes();
      setNotes(data);
      fetchAverage();
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const fetchAverage = async () => {
    try {
      const data = await NoteService.getAverage();
      setAverage(data.average);
    } catch (error) {
      console.error('Error fetching average:', error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await NoteService.deleteNote(noteId);
      fetchNotes(); // Recharger la liste après la suppression
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const addNewNote = async (noteData) => {
    try {
      await NoteService.addNote(noteData);
      fetchNotes(); // Recharger la liste après l'ajout
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="App">
      <h1>Gestion des Notes</h1>
      <div className="section">
        <NoteForm addNewNote={addNewNote} />
      </div>
      <div className="section">
        <Average average={average} />
      </div>
      <div className="section">
        <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
      </div>
      <div className="section">
        <NotesChart notes={notes} />
      </div>
    </div>
  );
};

export default App;
