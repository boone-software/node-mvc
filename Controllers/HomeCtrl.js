/**
 * Created by westopher on 10/6/15.
 */
var fs = require('fs');

function index (req, res) {
    /*fs.readFile('index.html', function (err, index) {
        if (err) {
            throw err;
        }
        res.send(index);

    });*/
    res.sendFile(__dirname + '/Views/Home/index.html');
}

module.exports = {
    index: index
};