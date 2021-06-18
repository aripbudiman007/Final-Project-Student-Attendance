class IndexController{
    static index(req, res) {
        res.render('loginForm')
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/login')
    }
}

module.exports = IndexController