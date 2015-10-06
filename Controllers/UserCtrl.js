/**
 * Created by westopher on 10/6/15.
 */
/**
 * Retrieve a collection of users
 * @param req
 * @param res
 */
function index (req, res) {
    res.json({
        model: 'User',
        action: 'index'
    });
}
/**
 * Create a new user
 * @param req
 * @param res
 */
function create (req, res) {
    res.json({
        model: 'User',
        action: 'create'
    });
}
/**
 * View a single user
 * @param req
 * @param res
 */
function view (req, res) {
    res.json({
        model: 'User',
        action: 'view'
    });
}
/**
 * Update a single user
 * @param req
 * @param res
 */
function update (req, res) {
    res.json({
        model: 'User',
        action: 'update'
    });
}
/**
 * Delete a single user
 * @param req
 * @param res
 */
function remove (req, res) {
    res.json({
        model: 'User',
        action: 'remove'
    });
}

module.exports = {
    index: index,
    create: create,
    view: view,
    update: update,
    remove: remove,
};