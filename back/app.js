/**
 * @fileOverview The backend app entry point.
 */

let path = require('path');

let express = require('express');
let bodyParser = require('body-parser');
let log4js = require('log4js');
let morgan = require('morgan');
let config = require('config');

let routes = require('./routes');

// init app
let app = express();

// setup logging
log4js.configure({appenders: [{type: 'console'}]});

let log = log4js.getLogger();

// set views path
app.set('viewsPath', path.join(__dirname, '../front/views'));

// make log accessible from app
app.set('log', log);

/**
 * Setup middleware
 */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.static('front/static'));
app.use(function(err, req, res, next) {
  log.error(err.stack);
  res.status(500).json({error: '500 - Internal Server Error'});
});

// init server
let server = app.listen(config.get('port'), function () {
  let host = server.address().address;
  let port = server.address().port;

  log.info('waldo-pizza listening at http://%s:%s', host, port);
});

module.exports = app;
