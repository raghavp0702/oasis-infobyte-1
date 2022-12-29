const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5500;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);


app.listen(PORT, ()=> console.log("Server running on port 5500") );
