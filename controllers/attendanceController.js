class AttendanceController{
    static viewAll(req, res){
        res.render('./attendance/home')
    }

    static cekIn(req, res){
        res.render('./attendance/cekin')
    }

    static submitCekIn(req, res){
        res.redirect('/')
    }
}

module.exports = AttendanceController