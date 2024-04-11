const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route to create a new user
router.post('/users', UserController.createUser);

module.exports = router;
