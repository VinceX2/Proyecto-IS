const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); // Show actions on server 
app.use(express.json()); //bodyparser

// Routes
app.use('/api/tickets', require('./routes/tickets.routes'));
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});