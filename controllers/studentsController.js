const { Student, Class } = require('../models')
class StudentController{
    static home(req,res) {
        const { notif } = req.query;
        Student.findAll()
        .then(result => {
            res.render('./students/home', { students: result,notif})
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

    static updateStudentForm(req,res){
        const {id} = req.params
        Student.findOne({
            where:{
                id:+id
            }
        })
        .then(result => {
            res.render('./students/formUpdateStudents',{student:result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateStudentAction(req, res) {
        const { id } = req.params;
        const { firstName, lastName, gender, birthDate, email, phoneNumber } = req.body
        Student.update({ firstName, lastName, gender, birthDate, email, phoneNumber },{
          where:{
            id:+id
          },
          returning:true
        })
          .then((result) => {
            const student = result[1][0]
            let notif = `Berhasil mengupdate student dengan id : ${student.id}`;
            res.redirect(`/students/?notif=${notif}`);
          })
          .catch((err) => {
            res.send(err);
          });
      }

      static deleteStudent(req, res) {
        const { id } = req.params;
        Student.destroy({
          where:{
            id:+id
          }
        })
          .then((result) => {
            let notif = `Berhasil menghapus student dengan id : ${id}`;
            res.redirect(`/students/?notif=${notif}`);
          })
          .catch((err) => {
            res.send(err);
          });
      }
}   

module.exports = StudentController