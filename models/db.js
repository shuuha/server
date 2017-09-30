const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';
        // this.getAll = this.getAll.bind(this);
    }    

    connect(func){
        return MongoClient.connect(this.URL)
                .then(db => this.db = db)
                .then(func.bind(this, req))
                .then(result => { 
                        this.db.close(); 
                        return result})
                .catch(this.err);
    }

    update(db, req){
        this.db.collection('data').updateOne({ name }, { name: 'muylaydec'});
    }

    err(err){
        console.log(err)
    }

    getAll(){
        return this.db.collection('data').find({}).toArray();
    }

    insert(){
     
    }

    remove(){
     
    }
}


const db = new MongoDbRepository();

module.exports = db;



