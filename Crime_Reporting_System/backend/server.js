// workflow
//1. import express, mongoose, models, other dependencies
// initialize expes, and other hngs that need init
//2. make server , connect to db "sort of , look it up"
//3. build/use middleware
//4. makeyour APIs (routes enclosing controllers) "sort of"


//imports // using ES6 syntax
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    // for easily handling environment variables
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import logger from './controllers/logger.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors'; // cors library, look it up

// Recreate __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url); //gives the filepath
const __dirname = dirname(__filename); //gives the root path

// Configure dotenv
dotenv.config({ path: resolve(__dirname, '../config/.env') }); // Path to env file

// Validate PORT
const PORT = process.env.PORT || 5000;
if (!PORT) {
  console.error('PORT is not defined. Check your .env file or dotenv configuration.');
  process.exit(1); // like system('exit');
}

// Initialize express
const app = express();

//middleware
//allow requestd from following, to prevent CORS errors,  Allow all origins (for development, make sure to restrict this in production)
app.use(logger); // not inbuilt

app.use(cors({
  origin: 'http://localhost:5173' 
}));


//APIs
app.use('/api/users', userRoutes);

app.use(express.json()); // im gin to use urlEncoded for my forms etc later.
app.use(express.urlencoded({extended: true}));



// connect to DB and Start the server
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Connection failed: ', error);
    });