/**
 * Created by westopher on 10/6/15.
 */
// Getting the orm instance
var orm = require('../Providers/mysql'),
    Seq = orm.Seq();

// Creating our model
module.exports = {
    model:{
        id: Seq.INTEGER,
        username: Seq.STRING,
        password: Seq.STRING
    },
    //relations:{
    //    hasMany:"World"
    //},
    options:{
        freezeTableName: true
    }
};