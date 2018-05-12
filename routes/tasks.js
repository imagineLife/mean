const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://jakeLaursen:Jake8Snake6@ds133964.mlab.com:33964/mytasklist', ['tasks'])

//GET
router.get('/tasks', (req,res,next) => {
	res.send('tasks page')
})

module.exports = router;