const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("This is no little thing - it's my future!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
