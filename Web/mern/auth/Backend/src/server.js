// const express = require('express');
import express from 'express';
import { config } from 'dotenv';

import MovieRouter from '../routes/movieRoutes.js'
import AuthRouter from '../routes/authRoutes.js'

import { connectDB,disconnectDB } from '../config/db.js';
const app = express();

config();
connectDB();

// to handle json data we use middleware
app.use(express.json())

app.use("/movie",MovieRouter);
app.use("/auth" ,AuthRouter);

app.get("/hello",(req,res) => {
    res.json({message:'hello world'})
})

const port = 5001;

app.listen(port , () => {
    console.log("Server is running");
})


// i just copy past this for api errors handling

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});