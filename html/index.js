const express = require('express');
const layout = require('./layout');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(layout());
})

module.exports = router;
