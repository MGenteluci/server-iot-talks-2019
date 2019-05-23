const router = require('express').Router();
const eventController = require('./event.controller');
const { validatePayload, validateDate } = require('./event.middleware');

router.get('/:date', validateDate, eventController.find);
router.post('/', validatePayload, eventController.save);

module.exports = router;
