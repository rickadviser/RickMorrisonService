const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const mysql = require('mysql');

const cors = require('cors');

const app = express();
const PORT = 3001;

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'QG3205KFfn',
  password: 'u4QIcmiVbD',
  database: 'QG3205KFfn',
  port: '3306',
});

// const connection = mysql.createConnection({
//   host: 'database',
//   user: 'root',
//   password: '',
//   database: 'pricing',
// });

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/prices/:date', (req, res) => {
  const { date } = req.params;
  const query = `SELECT * FROM hotelPricing WHERE hotelPricing.bookDate_old = "${date}";`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(404).json({ error: err });
    } else {
      res.status(200).json({ result: results });
    }
  });
});


app.listen(PORT, () => console.log('listening on port: ', PORT));
