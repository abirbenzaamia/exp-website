import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/config/db.js";

import participantRoutes from './src/routes/participantRoutes.js'
import errorHandling from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Routes 
app.use("/api", participantRoutes)


// Error handling middleware
app.use(errorHandling)

// Middlewares
app.use(express.json());
app.use(cors());

// Routes


// Testing POSTGRES Connection
app.get('/', async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`Hello from the backend. The database name is: ${result.rows[0].current_database}`)
});


// Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
  });

