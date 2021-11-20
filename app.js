const express = require('express');
const {cyan} = require('chalk');
const app = express();

const path = require('path');
const PORT = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', require('./html'));

app.use((req, res, next) => {
  res.status(404).send('You input an incorrect url.');
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(PORT, () => {
  console.log(cyan(`LISENING ON localhost:${PORT}`));
})
