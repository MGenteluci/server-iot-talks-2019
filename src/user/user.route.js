const router = require('express').Router();
const { validatePayload, isUserCreated, validateSignIn } = require('./user.middleware');
const userController = require('./user.controller');

router.post('/', validatePayload, isUserCreated, userController.signUp);
router.post('/signin', validateSignIn, userController.signIn);

module.exports = router;
