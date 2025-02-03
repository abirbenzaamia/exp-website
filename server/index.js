import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/config/db.js";
import errorHandling from "./src/middlewares/errorHandler.js";

//Routes
import responseRoutes from './src/routes/responseRoutes.js'
import participantRoutes from './src/routes/participantRoutes.js'
import testingGroupRoutes from './src/routes/testingGroupRoutes.js'

import corsOptions from "./src/config/corsOptions.js";
import createTables from "./src/data/createTables.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     // res.setHeader('Access-Control-Allow-Origin', 'https://kool-by-me.onrender.com');
//     next();
//   });


// Middlewares
app.use(express.json());
app.use(cors(corsOptions));



// Routes 
app.use("/api", participantRoutes)
app.use("/api", responseRoutes)
app.use("/api", testingGroupRoutes)



// Error handling middleware
app.use(errorHandling)

//Create table before starting server
createTables();

// Testing POSTGRES Connection
app.get('/', async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`Hello from the backend. The database name is: ${result.rows[0].current_database}`)
});


// Server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
  });

