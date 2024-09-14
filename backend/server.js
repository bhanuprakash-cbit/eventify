const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events'); // Assuming you create this route file
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://gotdaenerys3:gotdaenerys3@cluster0.qwobt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// Apply authMiddleware to protect these routes
app.use('/api/events', authMiddleware, eventRoutes); // Protected event routes

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
