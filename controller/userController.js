const db = require('../models/db');

class UserController{
    get(req, res){
        console.log('hello', db.getAll());
        const result = db.getAll();

        if(result.length)
            res.end(JSON.stringify(result));
        
        else res.end('nothing found');
    }

    post(){

    }

    delete(){

    }
}

const userController = new UserController();

module.exports = userController;