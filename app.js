const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express()

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
