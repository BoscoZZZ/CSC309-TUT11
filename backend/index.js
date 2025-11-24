import express from "express";
import routes from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

let FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Fix: Remove 'FRONTEND_URL=' prefix if present (Railway sometimes adds it)
if (FRONTEND_URL.startsWith('FRONTEND_URL=')) {
    FRONTEND_URL = FRONTEND_URL.replace(/^FRONTEND_URL=/, '');
}

// Debug: log the FRONTEND_URL value
console.log('FRONTEND_URL:', FRONTEND_URL);

const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('', routes);

export default app;