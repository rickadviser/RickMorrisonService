const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const mysql = require('mysql');

const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pricing',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/prices/:date', (req, res) => {
  const { date } = req.params;
  console.log(date)
  const query = `SELECT * FROM hotelpricing WHERE hotelpricing.bookDate_old = "${date}";`;
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
