var express = require('express');
var bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(users);


app.listen(80, () => {    
    console.log('listening on port 80');
})
