const express = require('express');
const { getMongoTime, getVideoById } = require('../controllers/videos');

const router = express.Router();

router.get('/getMongoTime', getMongoTime);

router.get('/getVideo/:id', getVideoById);

module.exports = router;