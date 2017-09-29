var express = require('express');
const app = express();

var bodyParser = require('body-parser');

// const routes = require('./config/routes');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/data';


app.get('/', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if(err) 
            console.log('cannot connect to MangoDb', err);
        else {
            console.log('connection established');
            
            const collection = db.collection('data');

            collection.find().toArray((err, result) => {
                if(err)
                    console.log(' error ', err);

                else if(result.length){
                    res.end(result);
                }
                
                else res.end('nothing found');

            })
            
                db.close();
        }
    })    
})

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));

app.post('/', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if(err) 
            console.log('post method: error', err);
        else {            
            console.log(req.body);
            // db.collection('data').updateOne()
            // res.write(req.body)
            if(!req.body) 
                res.end('well');
            res.end(req.body);
        }
        db.close();
    })    
})

app.listen(80, () => {
    console.log('listening on port 80');
})
