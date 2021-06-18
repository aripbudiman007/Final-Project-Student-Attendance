const { Attendance } = require('../models')

class AttendanceController{
    static home(req, res){
        let { notif } = req.query
        res.render('./attendance/home', {notif})
    }

    static viewAll(req, res){
        Attendance.findAll()
        .then(result => {
            let notif = req.query
            res.render('./attendance/attendanceList', {attenden: result, notif})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static cekIn(req, res){
        res.render('./attendance/cekin')
    }

    static submitCekIn(req, res){
        Attendance.create()
        .then((result) => {
            console.log(result);
            let notif = `Check In success`
         res.redirect(`/attendance?notif=${notif}`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = AttendanceController