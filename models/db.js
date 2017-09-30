const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';
        this.db = {};
    }    

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
        // this.connect();
        MongoClient.connect(this.URL, (err, db) => {
            if(err)
                console.log(err);
            else{            
                db.collection('data').find({}).toArray((err, r)=> {
                    if(err)
                        console.log('error in getting all the data');
                    
                    else
                        return r;
            })}
            db.close();
        })
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



