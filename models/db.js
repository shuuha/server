const MongoClient = require('mongodb').MongoClient;

class MongoDbRepository{

    constructor(){
        this.URL = 'mongodb://localhost:27017/data';        
    }

    connect(func){
        return MongoClient.connect(this.URL)
                .then(db => this.db = db)
                .then(func.bind(this))
                .then(result => { 
                        this.db.close(); 
                        return result})
                .catch(this.err);
    }

    update(reqBody){
        const { id, page } = reqBody;
        this.db.collection('data').updateOne({ id, page }, reqBody, { upsert: true});
    }

    getUser(reqParams){
        return this.db.collection('data').find({ id: +reqParams.id }).toArray();
    }

    getAll(){            
        return this.db.collection('data').find({}).toArray();
    }

    // getOne(reqParams){        
    //     return this.db.collection('data').findOne({ id: reqParams.id })
    // }    

    remove(reqParams){        
        return this.db.collection('data').deleteMany({ id: +reqParams.id, page: +reqParams.page });
    }

    err(err){
        console.log(err)
    }
}


const db = new MongoDbRepository();

module.exports = db;



