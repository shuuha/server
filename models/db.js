const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';        
    }    

    connect(){
        return MongoClient.connect(this.URL);
    }

    update(){
        this.connect();



        this.db.close();        
    }

    result(result){
        console.log(result);
        return result;    
    }

    getAll(){
        return this.connect()            
            .then(db => {
                    const result = db.collection('data').find({}).toArray();
                    db.close();
                    this.result(result);
                })            
            .catch(err => console.log(err));

        // return this.connect()
        //         .then(arg => this.db.collection('data').find({}).toArray((err, r)=> {
        //             if(err)
        //                 console.log('error in getting all the data');
        //                 return r
                    
        //             this.db.close();                
        //         }))
                // .catch(err => console.log(err));
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



