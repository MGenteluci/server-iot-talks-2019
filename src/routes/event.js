const router = require('express').Router();
const eventController = require('../controllers/event');
const validatePayload = require('../middlewares/validatePayload');

router.get('/:date', eventController.find);
router.post('/', validatePayload, eventController.save);

module.exports = router;
