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

dotenv.config();



mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    init().then(
        console.log('Connected to Db')
    )
    
});

app.use(express.json());
app.use('/api', contactRoute);
app.use('/api', blogRoute);
app.use('/api', userRoute);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(doc));

export default app;