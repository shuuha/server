var express = require('express');
const routes = require('./config/routes');

const app = express();

app.get('/', (req, res) => {
    
    }


    res.send('Hello')
})

app.listen(80, () => {
    console.log('listening on port 80');
})
