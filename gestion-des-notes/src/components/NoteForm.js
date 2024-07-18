import React, { useState } from 'react';

const NoteForm = ({ addNewNote }) => {
  const [subject, setSubject] = useState('');
  const [coefficient, setCoefficient] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewNote({
        subject,
        coefficient: parseInt(coefficient),
        grade: parseInt(grade),
        date
      });
      // Réinitialiser les champs du formulaire
      setSubject('');
      setCoefficient('');
      setGrade('');
      setDate('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <h2>Ajouter une Note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Matière:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <label>
          Coefficient:
          <input
            type="number"
            value={coefficient}
            onChange={(e) => setCoefficient(e.target.value)}
            required
          />
        </label>
        <label>
          Note:
          <input
            type="number"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
        <label>
          Note:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default NoteForm;
