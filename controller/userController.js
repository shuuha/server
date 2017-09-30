const db = require('../models/db');

class UserController{
    get(req, res){        
        let result = db.getAll()
                        .then(res => res);

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