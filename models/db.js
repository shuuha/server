const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';
        this.db = {};
    }    

    async connect(){
        await MongoClient.connect(this.URL, (err, db) => this.db = db);
    }

    update(){
        this.connect();



        this.db.close();        
    }

    async getAll(){
        this.connect();
            return await this.db.collection('data').find({}).toArray(err, r);
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



