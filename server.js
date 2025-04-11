const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Person = require('./models/person');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotelsystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo Error:", err));

app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to my server... How can I help you?');
});

// POST multiple persons
app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    
    // check if it's array or single object
    const response = Array.isArray(data)
      ? await Person.insertMany(data)
      : await new Person(data).save();

    res.status(200).json(response);
  } catch (error) {
    console.error("🔥 POST /person error:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// GET all persons
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
