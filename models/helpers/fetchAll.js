function fetchAll(db){
    return (req, res) => {
        db.collection('data').find({}).toArray((err, r)=> {
            if(err)
                console.log('error in fetching the data');
            
            else if(r.length)
                res.end(JSON.stringify(r));
            
            else 
                res.end('nothing found');
        })
    }
}
module.exports = fetchAll;