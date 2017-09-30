const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{
    
    URL = 'mongodb://localhost:27017/data';
    db;

    connect(){
        MongoClient.connect(this.URL, (err, db) => {
            if(err)
                console.log('error in connecting to db', err);
                
            else    
                this.db = db;
        })
    }

    update(){
        this.connect();



        this.db.close();        
    }

    getAll(){
        this.connect();       

        this.db.collection('data').find({}).toArray((err, r)=> {
            if(err)
                console.log('error in getting all the data');

                this.db.close();
                
                return r;
        });
    }

    insert(){
        this.connect();

        this.db.close();
    }

    remove(){
        this.connect()


        this.db.close();
    }
}


const db = new MongoDbRepository();

module.exports = db;



