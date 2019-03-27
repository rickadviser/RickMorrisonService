const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;

app.use(express.static(path.join(__dirname, "../client/dist")))

app.use(bodyParser.json());

app.listen(PORT, () => console.log('listening on port: ', PORT))