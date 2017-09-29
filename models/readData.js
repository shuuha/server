var MongoClient = require('mongodb').MongoClient;

var uri = "127.0.0.1:127017/";

MongoClient.connect(uri, (err, db) => {
    if(err) console.log(err);
    else {
        
    }
  db.close();
});