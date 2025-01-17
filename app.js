const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const connectionPool = require('./models/db')
const app = express()
const port = 3000

// 정적 파일 서빙
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'))
app.use('/', router)

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`);
    connectionPool.query('SELECT 1', (err, result) => {
      if (err) {
          console.error('MySQL 연결 문제: ', err);
      } else {
          console.log('MySQL 연결 테스트 성공.');
      }
  });
})