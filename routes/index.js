const express = require('express');
const router = express.Router();

//GET
router.get('/', (req,res,next) => {
	res.render('index.html')
})

module.exports = router;