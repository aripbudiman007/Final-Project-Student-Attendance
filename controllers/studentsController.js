const { Student, Class } = require('../models')
class StudentController{
    static home(req,res) {
        Student.findAll()
        .then(result => {
            res.render('./students/home', { students: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static formAddStudent(req, res) {
        Class.findAll()
        .then(result => {
            res.render('./students/formAddStudents', {classes: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addStudent(req, res) {
        const { firstName, lastName, gender, birthDate, email, phoneNumber } = req.body
        Student.create({ firstName, lastName, gender, birthDate, email, phoneNumber } )
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }
}   

module.exports = StudentController