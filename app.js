const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const app = express()

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")))

app.get('/', (req, res, next) => {
  res.send("HI")
})


app.listen(3001, function () {
  console.log("server is up and running")
})
