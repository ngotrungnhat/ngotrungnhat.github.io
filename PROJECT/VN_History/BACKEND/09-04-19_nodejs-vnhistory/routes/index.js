var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: true,
  user: 'postgres',
  host: 'localhost',
  database: 'vietnam_history',
  password: '1',
  port: 5432,
})

// .get('/getDataHome', async (req, res) => {
//   try {
//     const client = await pool.connect()
//     const result = await client.query('SELECT * FROM home_content');
//     const results = { 'results': (result) ? result.rows : null};
//     res.render('/getDataHome', results );
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

// API get data HOME from postgresql
router.get('/getDataHome', function(req, res, next) {
  pool.query('SELECT * FROM home_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});
// API get data STORY from postgresql
router.get('/getDataStory', function(req, res, next) {
  pool.query('SELECT * FROM story_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});
// API get data FIGURES from postgresql
router.get('/getDataFigures', function(req, res, next) {
  pool.query('SELECT * FROM figures_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});
// API get data BOOKS from postgresql
router.get('/getDataBooks', function(req, res, next) {
  pool.query('SELECT * FROM books_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});
// API get data VIDEOS from postgresql
router.get('/getDataVideos', function(req, res, next) {
  pool.query('SELECT * FROM videos_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});
// API get data BLOG from postgresql
router.get('/getDataBlog', function(req, res, next) {
  pool.query('SELECT * FROM blog_content', (err, ress) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(ress.rows);
    }
  })
});

//LẤY DỮ LIỆU TỪ HOME ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataHome', function(req, res, next) {
  var year = req.body.year,
      event = req.body.event;
  pool.query("INSERT INTO home_content (year, event) values ($1, $2)", [year, event],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + year +  event )
    }
  })
});
//LẤY DỮ LIỆU TỪ STORY ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataStory', function(req, res, next) {
  var story_title = req.body.story_title,
      story_background = req.body.story_background,
      story_content = req.body.story_content;
  pool.query("INSERT INTO story_content (story_title, story_background, story_content) values ($1, $2, $3)", [story_title, story_background, story_content],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + story_title + story_background + story_content )
    }
  })
});
//LẤY DỮ LIỆU TỪ FIGURES ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataFigures', function(req, res, next) {
  var figures_name = req.body.figures_name,
      figures_born = req.body.figures_born,
      figures_background = req.body.figures_background;
  pool.query("INSERT INTO figures_content (figures_name, figures_born, figures_background) values ($1, $2, $3)", [figures_name, figures_born, figures_background],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + figures_name + figures_born + figures_background )
    }
  })
});
//LẤY DỮ LIỆU TỪ BOOKS ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataBooks', function(req, res, next) {
  var book_background = req.body.book_background,
  book_name = req.body.book_name,
  book_author = req.body.book_author,
  book_price = req.body.book_price,
  book_sale = req.body.book_sale;
  pool.query("INSERT INTO books_content (book_background, book_name, book_author, book_price, book_sale) VALUES ($1, $2, $3, $4, $5)", [book_background, book_name, book_author, book_price, book_sale],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + book_background + book_name + book_author + book_price + book_sale )
    }
  })
});
//LẤY DỮ LIỆU TỪ VIDEOS ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataVideos', function(req, res, next) {
  var video_name = req.body.video_name,
  video_date = req.body.video_date,
  video_time = req.body.video_time,
  video_view = req.body.video_view,
  video_background = req.body.video_background;
  pool.query("INSERT INTO videos_content (video_name, video_date, video_time, video_view, video_background) VALUES ($1, $2, $3, $4, $5)", [video_name, video_date, video_time, video_view, video_background],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + video_name + video_date + video_time +  video_view + video_background )
    }
  })
});
//LẤY DỮ LIỆU TỪ STORY ĐỂ THÊM VÀO POSTGRESQL
router.post('/addDataBlog', function(req, res, next) {
  var blog_title = req.body.blog_title,
      blog_background = req.body.blog_background,
      blog_content = req.body.blog_content;
  pool.query("INSERT INTO blog_content (blog_title, blog_background, blog_content) values ($1, $2, $3)", [blog_title, blog_background, blog_content],
  (error, responsive) => {
    if (error) {
      res.send(error)
    } else {
      res.send("nhan duoc la: " + blog_title + blog_background + blog_content )
    }
  })
});

//XOÁ DỮ LIỆU CỦA HOME Ở POSTGRESQL
router.get('/deleteDataHome', function(req, res, next) {
  var idDelete = req.params.id
  pool.query("DELETE FROM home_content WHERE id = $1", [idDelete],(error, responsive) => {
    res.redirect('/deleteDataHome')
  })
});

module.exports = router;
