const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views')

// app uses static files from 'public' folder
app.use(express.static(__dirname+'/public'))

//Root URL('/') 경로에 대한 Get 요청
app.get('/', function (req, res) {
    res.render('index');
  })
  
  //특정 URL 경로에 대한 Get 요청 - 1
  app.get('/boards', function (req, res) {
    res.render('boards');
  })
  
  //특정 URL 경로에 대한 Get 요청 - 2
  app.get('/users', function (req, res) {
    res.render('users');
  })
  app.get('/blog', function (req, res) {
    res.render('blog');
  })
  app.get('/users', function (req, res) {
    res.render('users');
  })

// app.get('/', function (req, res) {
// app.get('/', (req, res) => {
//     console.log('Got a GET request from Client')
//     res.send('Got a response from Server')
// })

// app.post('/', (req, res) => {
//     console.log('Got a POST request from Client')
//     res.send('Got a response from Server')
// })

// app.put('/', (req, res) => {
//     console.log('Got a PUT request from Client')
//     res.send('Got a response from Server')
// })

// app.delete('/', (req, res) => {
//     console.log('Got a DELETE request from Client')
//     res.send('Got a response from Server')
// })

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})