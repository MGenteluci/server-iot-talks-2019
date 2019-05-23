const router = require('express').Router();
const healthController = require('./health.controller');

router.get('/', healthController.findStatus);

module.exports = router;
