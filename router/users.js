let express = require('express');

let router = express.router();
let readUsers = require('../services/readUsers')

router.get("/", (req, res) => {
  readUsers();
});

module.exports = router;