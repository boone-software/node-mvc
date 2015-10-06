/**
 * Created by westopher on 10/6/15.
 */
var express = require('express'),
    router = express.Router(),
    UserCtrl = require('../Controllers/UserCtrl');

/**
 * User REST API
 */
router.get('/users', UserCtrl.index);
router.get('/users/:userId', UserCtrl.view);
router.post('/users', UserCtrl.create);
router.put('/users/:userId', UserCtrl.update);
router.delete('/users/:userId', UserCtrl.remove);

module.exports = router;