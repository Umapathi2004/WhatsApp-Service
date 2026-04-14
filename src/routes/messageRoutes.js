const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.post('/send', controller.sendMessage);

module.exports = router;