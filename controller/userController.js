const db = require('../models/db');

var bodyParser = require('body-parser');



class UserController{
    get(req, res){
        db.connect(db.getAll)
            .then(result => {
                if(result.length)
                    res.end(JSON.stringify(result));

                else 
                    res.end('nothing found');
            })
    }

    post(req, res){
        db.connect( () => db.update(req.body))
            .then( () => res.end('updated'));
    }

    delete(req, res){        
        db.connect( ()=> db.remove(req.params))
            .then( (res) => res.end('deleted a document with params: ', res, JSON.stringify(req.params)));            
    }
}

const userController = new UserController();

module.exports = userController;