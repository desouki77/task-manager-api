const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Base route for testing
app.get('/' , (req,res) => {
    res.send('Task Manager API');
});

// Task Routes
const taskRoutes = require('./routes/taskRoutes');

app.use('/tasks', taskRoutes);


app.listen(PORT , ()=> {
    console.log("Hello Doss");
    console.log(`Server running on port ${PORT}`);
});

