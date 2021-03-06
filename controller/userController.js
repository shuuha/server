const db = require('../models/db');

const syncData = require('../helpers/syncData');

class UserController{
    // get(req, res){
    //     db.connect(db.getAll)
    //         .then(result => {
    //             if(result.length)
    //                 res.end(JSON.stringify(result));
    //             else 
    //                 res.end('nothing found');
    //         })
    // }

    get(req, res){
        db.connect( () => db.getUser(req.params))
            .then(r => syncData(r))
            .then(r => res.end(JSON.stringify(r)))
            .catch(err => console.log("error: ", err));
    }

    post(req, res){
        db.connect( () => db.update(req.body))
            .then( () => res.end('updated'));
    }

    delete(req, res){        
        db.connect( ()=> db.remove(req.params))
            .then( ({result}) => {
                    if(result.n == 0) 
                        res.end(`Deletion unsuccessful, params: ${JSON.stringify(req.params)}`);
                    else
                        res.end(`deleted a document with params: ${JSON.stringify(req.params)}`)});
    }
}

const userController = new UserController();

module.exports = userController;