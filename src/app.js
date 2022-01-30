const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoute = require('./routes/ContactRoute');
const blogRoute = require('./routes/BlogRoute');
const userRoute = require('./routes/UsersRoute');
const init = require('./config/init');

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

module.exports = app;