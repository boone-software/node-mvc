/**
 * Created by westopher on 10/6/15.
 */
var express = require('express');
var router = express.Router();
var ctrl = require('../Controllers/AuthCtrl');
/**
 * Define our registration action
 */
router.post('/register', ctrl.register);
/**
 * Define our endpoint to receive a user token aka login action
 */
router.post('/token', ctrl.token);

module.exports = router;