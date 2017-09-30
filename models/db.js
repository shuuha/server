const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';
        this.getAll = this.getAll.bind(this);
    }    

    connect(func){
        return MongoClient.connect(this.URL)
                .then(db => this.db = db)
                .then(func)
                .then(result => { 
                        this.db.close(); 
                        return result})
                .catch(this.err);
    }

    update(){
        this.connect();



        this.db.close();        
    }

    err(err){
        console.log(err)
    }

    getAll(){
        return this.db.collection('data').find({}).toArray();
    }

    // getAll(){
    //     return this.connect()
    //         .then(db => {
    //                 const result = db.collection('data').find({}).toArray();
    //                 db.close();
    //                 return result
    //             })
    //         .then(res => res)
    //         .catch(err => console.log(err));
    // }



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



