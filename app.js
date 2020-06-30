const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const app = express()

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")))

const PORT = 3000


app.listen(PORT, function () {
  console.log(`start making music at localhost:${PORT}`)
})
