var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/data';

function mongoDb(func){
    MongoClient.connect(url, (err, db)=>{
        if(err)
            console.log('connection problem');
        else 
            func(db);

        db.close();
    })
}

module.exports = mongoDb;