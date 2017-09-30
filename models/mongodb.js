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



class MongoDbRepository
{
    static URL = 'mongodb://localhost:27017/data';

    constructor()
    {
        MongoClient.connect(url, (err, db) => this.connection = db)
    }

    //some url
    update = () => 
    {
        db.collection('data').updateOne()
    }

    getAll = async () =>
    {
        const items = await this.connection.collection('data').find({}).toArray();
        return items;
    }
}


const myDB = new MongoDbRepository();
export {myDB}