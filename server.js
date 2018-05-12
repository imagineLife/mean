const express = require('express');
const path = require('path');
const bp = require('body-parser');

const indexRoute = require('./routes/index');
const apiRoute = require('./routes/tasks');

const port = 3000;

const app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//enable rendering html files
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MiddleWare
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

//create routes
app.use('/', indexRoute);
app.use('/api', apiRoute);

//listen for server running
app.listen(port, () => {
	console.log('server running on port ',port);
});
