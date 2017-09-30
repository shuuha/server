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

            collection.find({}).toArray((err, result) => {
                if(err)
                    console.log(' error ', err);

                else if(result.length){
                    console.log('sending info on data collection');
                    res.end(JSON.stringify(result));
                }
                
                else res.end('nothing found');

            })
            
                db.close();
        }
    })    
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if(err) 
            console.log('error, unable to connect to database', err);
        else {            
            console.log(req.body);
            if(req.body){
                const { id, page } = req.body;
                // db.collection('data').insertOne(req.body);
                db.collection('data').updateOne({id, page}, req.body, {upsert: true});
            
                res.end(`${JSON.stringify(req.body)},  is added to database`)
            }
        db.close();
        }
    })    
})

app.delete('/:name', (req, res)=> {
    MongoClient.connect(url, (err, db)=> {
        if(err)
            console.log('unable to connect to database', err);
        
        else{
            console.log('connecton with DB established');
                const { name } = req.params;
                db.collection('data').findOneAndDelete({ name }, (err, r)=> {
                    if(err) 
                        console.log('deleting failed')
                    else
                        res.end('deletion is successful');
                })
            res.end('thinking');
        }
        db.close();
    })
})


app.listen(80, () => {
    console.log('listening on port 80');
})
