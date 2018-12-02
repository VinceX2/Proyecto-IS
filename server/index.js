const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); // Show actions on server
app.use(express.json()); //bodyparser
app.use(cors({ origin: 'http://localhost:4200' })); //Setting Angular server and Nodejs server

// Routes
app.use('/api/tickets', require('./routes/tickets.routes'));
app.use("/api/orders", require("./routes/orders.routes"));
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
