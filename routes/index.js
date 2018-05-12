const express = require('express');
const router = express.Router();

//GET
router.get('/', (req,res,next) => {
	res.send('Index page')
})

module.exports = router;