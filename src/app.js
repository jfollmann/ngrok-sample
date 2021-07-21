const express = require('express')
const os = require('os')
const app = express()
const port = 3000

app.use((req, _res, next) => {
  console.log(`[${os.hostname()}] - ${req.method} ${req.originalUrl}`);
  next();
})

app.get('/', (_req, res) => {
  return res.send('Sample Express!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
