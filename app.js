const express = require('express')
const app = express()
const port = 3000

// app.get('/', function (req, res) {
app.get('/', (req, res) => {
    console.log('Got a GET request from Client')
    res.send('Got a response from Server')
})

app.post('/', (req, res) => {
    console.log('Got a POST request from Client')
    res.send('Got a response from Server')
})

app.put('/', (req, res) => {
    console.log('Got a PUT request from Client')
    res.send('Got a response from Server')
})

app.delete('/', (req, res) => {
    console.log('Got a DELETE request from Client')
    res.send('Got a response from Server')
})

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})