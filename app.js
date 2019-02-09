const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3210;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'denis',
    password: 'denis',
    database: 'mydb'
});

db.connect();

app.get('/', function (req, res) {
    // var sql = 'SELECT * FROM Customer';
    db.query('SELECT * FROM Customer', (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

// app.post('/data', function(req, res){
// 	console.log(req.body);
//     var data = {nama:req.body.nama, usia:req.body.usia};
//     var sql = 'INSERT INTO ninja SET ?';
//     db.query(sql, data, (err, result)=>{
//     if(err) throw err;
//     console.log(result);
//     res.send({
//         status: 'Data sukses diinput!',
//         no: null,
// 		nama: req.body.nama,
// 		usia: req.body.usia
// 	});
// });
// });

app.listen(port, () => {
    console.log('Server works on port 3210')
});