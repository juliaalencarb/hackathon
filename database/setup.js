require('dotenv').config();

const fs = require('fs');
const db = require('./connect.js');

const sql = fs.readFileSync('./database/diary.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log('DB setup complete.')
    })
    .catch(error => console.log(error));