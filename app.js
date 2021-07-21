const express = require('express')
const os = require('os')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(`[${os.hostname()}] - ${req.method} ${req.originalUrl}`);
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World Follmann Express!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
