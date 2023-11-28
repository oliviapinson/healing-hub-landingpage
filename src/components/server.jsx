// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5002; // or any other port you prefer

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using VS Code MongoDB extension
// Make sure to install the extension and connect to your MongoDB server

// No need to specify the MongoDB URI here

console.log("Before mongoose.connect");
mongoose.connect('mongodb+srv://oliviapinson:brEE0112@contactform.exriujk.mongodb.net/?retryWrites=true&w=majority');
console.log("after mongoose.connect");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Define a Mongoose model for responses
const Response = mongoose.model('responses', {
  email: String,
  message: String,
});

app.get('/submit-form', (req, res) => {
res.send('Hello, Express this is the form submission page... !');
});

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { email, message } = req.body;

  // Create a new Response document
  const newResponse = new Response({ email, message });

  // Save the document to the 'responses' collection
  newResponse.save()
  .then(() => {
    res.status(200).send('Form submitted successfully');
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error saving to database');
  });
});

app.listen(port, () => {
    console.log('here');
    console.log(`Server is running on port ${port}`);
});
