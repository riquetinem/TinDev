const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://tinem:shinhate123@cluster0-wkcyj.mongodb.net/week08?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true  
});

mongoose.set('useCreateIndex', true);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);