const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const fs = require('fs')
const app = express()
const port = 3001

app.use(express.static('public'));
app.use(bodyParser.text())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})