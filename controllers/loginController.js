const {User} = require('../models')
const bcrypt = require('bcrypt')
class LoginController {
    static loginForm(req, res) {
        res.render('loginForm')
    }

    static login(req, res) {
        const { email, password } = req.body

        User.findOne({ where: { email } })
        .then(result => {
            if (result) {
                let compare = bcrypt.compareSync(password, result.password);
                if (compare) {
                    req.session.userId = result.id
                    req.session.email = result.email
                    req.session.role = result.role
                    if(result.role === 'student'){
                        res.redirect('/attendance',)
                    }else if(result.role === 'admin'){
                        res.redirect('/students')
                    }
                } else {
                    let err = new Error('Email atau password tidak ditemukan')
                    err.name = 'invalidEmailPassword'
                    throw err
                }
            } else {
                let err = new Error('Email atau password tidak ditemukan')
                err.name = 'invalidEmailPassword'
                throw err
            }
        })
        .catch(err => {
            console.log(err);
            if (err.name = 'invalidEmailPassword') {
                res.send(err.message)
            } else {
                res.send(err)
            }
        })
    }
}

module.exports = LoginController