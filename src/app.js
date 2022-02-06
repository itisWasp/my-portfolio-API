// const express = require('express');
// const app = express(); 
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const contactRoute = require('./routes/ContactRoute');
// const blogRoute = require('./routes/BlogRoute');
// const userRoute = require('./routes/UsersRoute');
// const init = require('./config/init');

import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoute from './routes/ContactRoute.js';
import blogRoute from './routes/BlogRoute.js';
import userRoute from './routes/UsersRoute.js';
import init from './config/init.js';
import swaggerUi from 'swagger-ui-express';
import doc from './openDoc.js';
import cors from 'cors';

dotenv.config();

const corsOptions = { origin: '*', optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
} 

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    init().then(
        console.log('Connected to Db')
    )
    
});

app.use(express.json());
app.use('/api', cors(corsOptions) ,contactRoute);
app.use('/api', cors(corsOptions) ,blogRoute);
app.use('/api', cors(corsOptions) ,userRoute);
app.use('/doc', cors(corsOptions) ,swaggerUi.serve, swaggerUi.setup(doc));

export default app;