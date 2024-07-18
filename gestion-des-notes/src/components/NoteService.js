import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // URL de votre backend Node.js

const NoteService = {
  getAllNotes: async () => {
    const response = await axios.get(`${BASE_URL}/notes`);
    return response.data;
  },

  addNote: async (noteData) => {
    const response = await axios.post(`${BASE_URL}/notes`, noteData);
    return response.data;
  },

  deleteNote: async (noteId) => {
    const response = await axios.delete(`${BASE_URL}/notes/${noteId}`);
    return response.data;
  },

  getAverage: async () => {
    const response = await axios.get(`${BASE_URL}/average`);
    return response.data;
  },
};

export default NoteService;
