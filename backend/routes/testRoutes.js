const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is a route from /api/test' });
});

module.exports = router;
