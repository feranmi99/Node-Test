const express = require('express');
const router = express.Router();
const { todoFunction, getFunction } = require('./controllers/todoController');
router.use(express.json());


router.post('/todoPost', todoFunction);
router.get('/getPost', getFunction);

module.exports = router;

