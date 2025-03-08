// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import customerRoutes from './routes/customerRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// const app = express();
// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true})) //

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// // Routes
// app.use('/api/customers', customerRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// console.log('Backend server started successfully.');

import http from 'http'; // Native HTTP module
import app from './app.js'; // Import the Express app
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});