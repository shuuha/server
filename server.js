var express = require('express');
// const routes = require('./config/routes');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/data';


const app = express();

app.get('/', (req,res) => {
    // MongoClient(url, (err, db) => {
    //     if(err) console.log('error', err);
    //     else {            
    //         console.log('connection established');
    //         res.end('mongo db');
    //     }
    // })
    res.end('hello');
})

app.post('/', (req, res) => {
    res.end();
})

app.listen(80, () => {
    console.log('listening on port 80');
})
