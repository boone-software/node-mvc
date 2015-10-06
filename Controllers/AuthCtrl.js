/**
 * Created by westopher on 10/6/15.
 */

function register (req, res) {
    res.json({
        page: 'registration',
        user: {
            name: 'Awesome',
            pass: 'Sauce'
        },
        token: 'asdlkj5t32lkajsdfaasdt'
    });
}

function token (req, res) {
    res.json({
        page: 'token',
        user: {},
        token: 'asd;lk235lkajsdawle5jaew'
    });
}

module.exports = {
    register: register,
    token: token
};