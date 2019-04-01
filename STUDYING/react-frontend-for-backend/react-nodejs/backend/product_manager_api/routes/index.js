var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '1',
  port: 5432,
})

// TẠO ĐƯỜNG DẪN ĐỂ API LẤY DỮ LIỆU TỪ POSTGRESQL
router.get('/getdata01', function(req, res, next) {
  // // CẤP QUYỀN CHO http://localhost:3000 LẤY DỮ LIỆU
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  //LẤY DỮ LIỆU SAU KHI TRUY NHẬP VÀO ĐƯỜNG DẪN
  pool.query('SELECT * FROM product_info',  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send(responsive.rows)
    }
    // pool.end();
  })
});


//GỬI DỮ LIỆU TỪ REACT LÊN NODE
//TẠO ĐƯỜNG DẪN ĐỂ GET DỮ LIỆU TỪ REACT VỀ NODE
router.get('/add', function(req, res, next) {
  res.render('add', {})
});
//TẠO ĐƯỜNG DẪN ĐỂ POST DỮ LIỆU TỪ REACT VỀ NODE
router.post('/add', function(req, res, next) {
  var product_name = req.body.product_name,
  product_price = req.body.product_price,
  image = req.body.image;
  // INSERT DỮ LIỆU VÀO POSTGRESQL
  pool.query("INSERT INTO product_info (product_name, product_price, image) values ($1, $2, $3)", [product_name, product_price, image],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + product_name +  product_price + image )
    }
  })
});

module.exports = router;
