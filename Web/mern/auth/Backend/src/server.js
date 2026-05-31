// const express = require('express');
import express from 'express';
import { config } from 'dotenv';

import MovieRouter from '../routes/movieRoutes.js'
const app = express();

config();
app.use("/movie",MovieRouter);

// app.get("/hello",(req,res) => {
//     res.json({message:'hello world'})
// })

const port = 5001;

app.listen(port , () => {
    console.log("Server is running");
})
