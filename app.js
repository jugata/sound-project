const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express()

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")))

const port = process.env.port || 3000


app.listen(port, function () {
  console.log(`start making music at localhost:${port}`)
})
