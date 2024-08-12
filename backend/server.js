// const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abc123', // Replace with your MySQL password
  database: 'flashcards_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get all flashcards
app.get('/api/flashcards', (req, res) => {
  connection.query('SELECT * FROM flashcards', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new flashcard
app.post('/api/flashcards', (req, res) => {
  const { question, answer } = req.body;
  const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
  connection.query(query, [question, answer], (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, question, answer });
  });
});

// Edit a flashcard
app.put('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  const query = 'UPDATE flashcards SET question = ?, answer = ? WHERE id = ?';
  connection.query(query, [question, answer, id], (err) => {
    if (err) throw err;
    res.status(200).json({ id, question, answer });
  });
});

// Delete a flashcard
app.delete('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM flashcards WHERE id = ?';
  connection.query(query, [id], (err) => {
    if (err) throw err;
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
