const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://jakeLaursen:Jake8Snake6@ds133964.mlab.com:33964/mytasklist', ['tasks'])

//GET All tasks
router.get('/tasks', (req,res,next) => {
	db.tasks.find((err, tasks) => {
		if(err){
			res.send(err)
		}
		res.json(tasks)
	})
})

//GET Single tasks
router.get('/task/:id', (req,res,next) => {
	db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},(err, task) => {
		if(err){
			res.send(err)
		}
		res.json(task)
	})
})
module.exports = router;