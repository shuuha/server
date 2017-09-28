var express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Hello')
})

app.listen(80, () => {
    console.log('listening on port 8080');
})
