const authMiddleware = (req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        let notif = `silahkan login terlebih dahulu`
        res.redirect(`/login?notif=${notif}`)
    }
}

module.exports = authMiddleware