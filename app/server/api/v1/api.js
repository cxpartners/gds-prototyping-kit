const express = require('express');
const axios = require('axios');

const router = express.Router();

// Get all licenses for a organisation
router.get('/hello', async (req, res, next) => {

  return res.send({ hello: 'world' });
});

/* eslint-disable */
router.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(err);
  const msg = err.message || err.stack || err.name || 'General error';
  return res.status(status).send({ error: msg });
});
/* eslint-enable */

module.exports = router;
