class AttendanceController{
    static viewAll(req, res){
        let notif = req.query
        res.render('./attendance/home', {notif})
    }

    static cekIn(req, res){
        res.render('./attendance/cekin')
    }

    static submitCekIn(req, res){
        let notif = `Check In success`
        res.redirect(`/attendance?notif=${notif}`)
    }
}

module.exports = AttendanceController