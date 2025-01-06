const express = require('express');
const { getVideoById } = require('../controllers/videos');

const router = express.Router();

// Define the /getVideo/:id route
router.get('/getVideo/:id', getVideoById);

module.exports = router;