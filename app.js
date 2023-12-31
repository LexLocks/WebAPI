const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});