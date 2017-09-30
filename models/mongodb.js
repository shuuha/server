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


    getAllCallback = (callback) =>
    {
        this.connection.collection('data').find({}).toArray(callback);
    }
}




const myDB = new MongoDbRepository();
export {myDB}



//inside some controller
class SomeController
{
    someRequest = (req,res) =>
    {
        myDB.getAllCallback( ( items ) => {
            if(items.length == 0)
                res.end('[]')
            else
                res.end(JSON.stringify(items));
        });
    }

    asyncSomeRequest = async (req, res)=>
    {
        const items = await myDB.getAll();
        if(items.length == 0)
            res.end();
        else
            res.end(JSON.stringify(items));
    }

    timeout = (time) =>
    {
        return new Promise((resolve,reject)=>setTimeout(resolve,time))
    }


    test = async () =>
    {
        await this.timeout(100);
    }

}


