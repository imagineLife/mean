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

//SAVE a task
router.post('/task', (req,res,next) => {
	const sentTask = req.body;
	if(!task.title || (task.isDone + '')){
		res.status(400);
		res.json({
			"error":"Bad Data :("
		})
	}else{
		db.tasks.save(sentTask, (err, task) => {
			if(err){
				res.send(err);
			}
			res.json(sentTask);
		})
	}
})

//DELETE Single task
router.delete('/task/:id', (req,res,next) => {
	db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},(err, task) => {
		if(err){
			res.send(err)
		}
		res.json(task)
	})
})

//UPDATE task
router.put('/task/:id', (req,res,next) => {
	const task = req.body;
	let updTask = {};

	//validation
	if(task.isDone){
		updTask.isDone = task.isDone;
	}
	if(task.title){
		updTask.title = task.title;
	}
	if(!updTask){
		res.status(400);
		res.json({
			"error":'Bad Data, fool!'
		})
	}else{
		db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updTask, {}, (err, task) => {
			if(err){
				res.send(err)
			}
			res.json(task)
		})
	}


})


module.exports = router;