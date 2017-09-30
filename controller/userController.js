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
        const { name } = req.body;
        console.log(name);

        db.connect( () => db.update(name))
            .then( () => res.end('updated'));
    }

    delete(){

    }
}

const userController = new UserController();

module.exports = userController;