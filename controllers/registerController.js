const {User} = require('../models')

class RegisterController{

    static formRegister(req, res) {
        let { notif }  = req.query
        res.render('formRegister',)
    }

    static register(req, res) {
        const { email, password, name, role} = req.body
        User.create({ email, password, name, role })
        .then(result => {
            let notif = `register success`
            res.redirect(`/login?notif=${notif}`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = RegisterController