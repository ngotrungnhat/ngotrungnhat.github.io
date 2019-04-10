var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vietnam_history',
  password: '1',
  port: 5432,
})

// API get data HOME from postgresql
router.get('/getDataHome', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  pool.query('SELECT * FROM home_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
    // pool.end()
  })
});

// API get data STORY from postgresql
router.get('/getDataHome', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  pool.query('SELECT * FROM home_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
    // pool.end()
  })
});

module.exports = router;
