const express = require('express');
const appointmentsRouter = require('./routes/appointmentsRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors')
// const path = require('path');

const app = express();

// middleware converts incoming json body data to js object and puts it to req.body
app.use(express.json());
app.use(cors());

// main routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/appointments', appointmentsRouter);


module.exports = app;