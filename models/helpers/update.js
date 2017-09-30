function update(err, db){
    if(err)
        console.log(err);
    else {
        db.collection('data').updateOne()
    }
}


module.exports = update;