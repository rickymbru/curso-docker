const express = require ('express');
const restful = require ('node-restful');
const server = express();
const mongoose = require ('mongoose');
const bodyparser = require ('body-parser')
const cors = require ('cors');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Middleware
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())
server.use(cors())

// ODM
const Client = restful.model('Client', {
    name: {type: String, required: true}
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

// Routes
Client.register(server, '/clients')

// Start server
server.listen('3000');

console.log('Enviroment:', process.env.NODE_ENV);


