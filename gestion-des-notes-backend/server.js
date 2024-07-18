const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Exemple de données (temporaire, à remplacer par une base de données)
let notes = [
  { id: 1, subject: 'Mathématiques', coefficient: 2, grade: 15, date: '2024-02-10' },
  { id: 2, subject: 'Français', coefficient: 1, grade: 14, date: '2024-02-10' },
];

// Routes
app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { subject, coefficient, grade, date } = req.body;

  // Vérifier que la note est entre 0 et 20
  if (grade < 0 || grade > 20) {
    return res.status(400).json({ error: 'La note doit être comprise entre 0 et 20' });
  }

  const newNote = { id: notes.length + 1, subject, coefficient, grade, date };
  notes.push(newNote);
  res.json(newNote);
});


app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== parseInt(id));
  res.json({ message: 'Note deleted' });
});

app.get('/average', (req, res) => {
  const totalCoefficient = notes.reduce((total, note) => total + note.coefficient, 0);
  const totalGrade = notes.reduce((total, note) => total + (note.grade * note.coefficient), 0);
  const average = totalGrade / totalCoefficient;
  res.json({ average: average.toFixed(2) });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
