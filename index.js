const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const webport = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

server.listen(webport, () => {
  console.log(`Server is listening on port ${webport}!`)
})

