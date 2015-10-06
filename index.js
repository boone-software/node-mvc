/**
 * Boone.io - MEAN Stack Boilerplate with JWT Authorization
 * Created by - Wes King
 * wes@boone.io
 * October 9th, 2015
 */
var config = require('./Config'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs');
/**
 * Declare dependencies
 */
if (config.providers.mysql.enabled) {
    var database = config.providers.mysql.database,
        username = config.providers.mysql.username,
        password = config.providers.mysql.password,

        db = require('./Providers/mysql').setup('./Models', database, username, password, {
            host: config.providers.mysql.host,

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
}
/**
 * Declare routers
 */
var authRoutes = require('./Routes/Auth'),
    apiRoutes = require('./Routes/Api');
/**
 * Declare Controllers
 */
var HomeCtrl = require('./Controllers/HomeCtrl');
/**
 * Declare our body parsers to received url-encoded and JSON request bodies
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/**
 * Declare '/' endpoint to serve Angular application
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Views/Home/index.html');
});
/**
 * Declare our Auth endpoints
 */
app.use('/auth', authRoutes);
/**
 * Declare our API endpoints
 */
app.use('/api', apiRoutes);
/**
 * Serve static files in our webroot
 */
app.use(express.static('webroot'));
/**
 * Listen on configured port
 */
app.listen(config.port, function () {
    console.log('App listening on port ' + config.port);
});

